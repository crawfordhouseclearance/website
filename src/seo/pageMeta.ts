const SITE_ORIGIN = "https://www.crawfordhouseclearance.co.uk"

type PageMeta = {
  title: string
  description: string
  path: string
  /** Defaults to "index, follow" (matches index.html). */
  robots?: string
}

/** Mirrors index.html defaults for `/` so client navigation restores head correctly. */
const home: PageMeta = {
  title:
    "Crawford House Clearance | Probate, Domestic & Commercial Clearance",
  description:
    "Probate, domestic and commercial house clearances across Falkirk, Stirling and Central Scotland.",
  path: "/",
}

const privacy: PageMeta = {
  title: "Privacy Policy | Crawford House Clearance",
  description:
    "How Crawford House Clearance collects, uses and stores personal information when you contact us or use this website. Falkirk, Stirling and Central Scotland.",
  path: "/privacy",
}

const adContact: PageMeta = {
  title: "Get a Quote | Crawford House Clearance",
  description:
    "Request a quote for probate, domestic or commercial house clearance across Falkirk, Stirling and Central Scotland.",
  path: "/ad-contact",
  robots: "noindex, follow",
}

const adContactThanks: PageMeta = {
  title: "Contact Received | Crawford House Clearance",
  description:
    "Thank you — your enquiry has been received. Crawford House Clearance will be in touch shortly.",
  path: "/ad-contact/thanks",
  robots: "noindex, follow",
}

export type PublicPageMetaKey =
  | "home"
  | "privacy"
  | "ad-contact"
  | "ad-contact-thanks"

const byKey: Record<PublicPageMetaKey, PageMeta> = {
  home,
  privacy,
  "ad-contact": adContact,
  "ad-contact-thanks": adContactThanks,
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
    .querySelector('meta[name="robots"]')
    ?.setAttribute("content", p.robots ?? "index, follow")

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
