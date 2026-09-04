import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const distDir = path.join(projectRoot, "dist")
const serverDir = path.join(projectRoot, ".prerender")
const template = await readFile(path.join(distDir, "index.html"), "utf8")
const serverEntry = pathToFileURL(path.join(serverDir, "entry-server.js")).href
const { prerenderPaths, render } = await import(serverEntry)

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function replaceMetaContent(document, selectorAttribute, selectorValue, content) {
  const escapedContent = escapeAttribute(content)
  return document.replace(/<meta\b[^>]*>/gi, (tag) => {
    const selector = new RegExp(`${selectorAttribute}=["']${selectorValue}["']`, "i")
    if (!selector.test(tag)) return tag

    return tag.replace(/content=["'][^"']*["']/i, `content="${escapedContent}"`)
  })
}

function applyHead(document, meta) {
  let output = document.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeAttribute(meta.title)}</title>`,
  )

  output = replaceMetaContent(output, "name", "description", meta.description)
  output = replaceMetaContent(output, "name", "robots", meta.robots ?? "index, follow")
  output = replaceMetaContent(output, "property", "og:title", meta.title)
  output = replaceMetaContent(output, "property", "og:description", meta.description)
  output = replaceMetaContent(output, "property", "og:url", meta.url)
  output = replaceMetaContent(output, "name", "twitter:title", meta.title)
  output = replaceMetaContent(output, "name", "twitter:description", meta.description)

  const canonicalPattern = /<link\s+rel=["']canonical["'][^>]*>/i

  if (!meta.canonicalUrl) {
    return output.replace(canonicalPattern, "")
  }

  return output.replace(
    canonicalPattern,
    `<link rel="canonical" href="${escapeAttribute(meta.canonicalUrl)}" />`,
  )
}

for (const route of prerenderPaths) {
  const result = render(route)
  let document = applyHead(template, result.meta)
  document = document.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered-path="${escapeAttribute(route)}">${result.html}</div>`,
  )

  const outputPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : route === "/404"
        ? path.join(distDir, "404.html")
        : path.join(distDir, `${route.slice(1)}.html`)
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, document, "utf8")
}

await rm(serverDir, { recursive: true, force: true })
