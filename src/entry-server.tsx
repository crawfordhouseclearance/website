import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { getPageMetaForPath } from "./seo/pageMeta"

export const prerenderPaths = [
  "/probate-house-clearance",
  "/house-clearance-falkirk",
  "/house-clearance-stirling",
  "/commercial-clearance",
] as const

export function render(url: string) {
  const meta = getPageMetaForPath(url)

  if (!meta) {
    throw new Error(`No page metadata is registered for ${url}`)
  }

  return {
    html: renderToString(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
    ),
    meta,
  }
}
