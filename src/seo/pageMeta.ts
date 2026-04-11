const SITE_ORIGIN = "https://www.crawfordhouseclearance.co.uk"

/** Mirrors index.html defaults for `/` so client navigation restores head correctly. */
const home = {
  title:
    "Crawford House Clearance | Probate, Domestic & Commercial Clearance",
  description:
    "Probate, domestic and commercial house clearances across Falkirk, Stirling and Central Scotland.",
  path: "/" as const,
}

const privacy = {
  title: "Privacy Policy | Crawford House Clearance",
  description:
    "How Crawford House Clearance collects, uses and stores personal information when you contact us or use this website. Falkirk, Stirling and Central Scotland.",
  path: "/privacy" as const,
}

export type PublicPageMetaKey = "home" | "privacy"

const byKey: Record<PublicPageMetaKey, typeof home | typeof privacy> = {
  home,
  privacy,
}

/**
 * Updates document head for SPA routes. Initial HTML for `/` matches index.html;
 * call with `home` on the home route so returning from `/privacy` restores tags.
 */
export function applyPageMeta(key: PublicPageMetaKey) {
  const p = byKey[key]
  const url = `${SITE_ORIGIN}${p.path}`

  document.title = p.title

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", p.description)

  document.querySelector('link[rel="canonical"]')?.setAttribute("href", url)

  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", url)
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", p.title)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", p.description)

  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", p.title)
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", p.description)
}
