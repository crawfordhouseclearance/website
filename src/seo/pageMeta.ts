const SITE_ORIGIN = "https://www.crawfordhouseclearance.co.uk"

export type PageMeta = {
  title: string
  description: string
  path: string
  /** Defaults to a self-referencing canonical URL. */
  canonical?: boolean
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

const probateHouseClearance: PageMeta = {
  title: "Probate House Clearance in Falkirk & Stirling | Crawford",
  description:
    "Respectful probate and bereavement house clearance for families, executors and professionals across Falkirk, Stirling and Central Scotland.",
  path: "/probate-house-clearance",
}

const houseClearance: PageMeta = {
  title: "House Clearance Across Central Scotland | Crawford",
  description:
    "Full and partial house clearance across Central Scotland, with retained belongings, access, scope and pricing agreed before work begins.",
  path: "/house-clearance",
}

const falkirkHouseClearance: PageMeta = {
  title: "House Clearance Falkirk | Crawford House Clearance",
  description:
    "Full and partial house clearance in Falkirk for homes, landlords and managed properties, with agreed pricing and licensed waste removal.",
  path: "/house-clearance-falkirk",
}

const stirlingHouseClearance: PageMeta = {
  title: "House Clearance Stirling | Crawford House Clearance",
  description:
    "Full and partial house clearance in Stirling for homes, estates and managed properties, with agreed pricing and licensed waste removal.",
  path: "/house-clearance-stirling",
}

const cumbernauldHouseClearance: PageMeta = {
  title: "House Clearance Cumbernauld | Crawford House Clearance",
  description:
    "Practical full and partial house clearance in Cumbernauld for homes, estates, landlords and managed properties, with scope and price agreed upfront.",
  path: "/house-clearance-cumbernauld",
}

const commercialClearance: PageMeta = {
  title: "Commercial Clearance Falkirk & Stirling | Crawford",
  description:
    "Commercial clearance for offices, shops, units and managed premises across Falkirk, Stirling and Central Scotland.",
  path: "/commercial-clearance",
}

const landlordEndOfTenancyClearance: PageMeta = {
  title: "Landlord & End-of-Tenancy Clearance | Crawford",
  description:
    "Clearance of unwanted furniture and contents for landlords, letting agents and tenants across Central Scotland, with access and scope agreed upfront.",
  path: "/landlord-end-of-tenancy-clearance",
}

const professionals: PageMeta = {
  title: "Property Clearance for Professionals | Crawford",
  description:
    "Practical property clearance for solicitors, executors, estate agents, landlords and letting agents across Central Scotland.",
  path: "/professionals",
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

const ebayAuthAccepted: PageMeta = {
  title: "eBay Authorisation Complete | Crawford House Clearance",
  description:
    "eBay authorisation completed successfully. Return to the application to continue.",
  path: "/ebay/auth/accepted",
  robots: "noindex, follow",
}

const ebayAuthDeclined: PageMeta = {
  title: "eBay Authorisation Declined | Crawford House Clearance",
  description:
    "eBay authorisation was declined. Close this page and try again if needed.",
  path: "/ebay/auth/declined",
  robots: "noindex, follow",
}

const notFound: PageMeta = {
  title: "Page Not Found | Crawford House Clearance",
  description:
    "The requested page could not be found. Return to Crawford House Clearance for services and contact details.",
  path: "/404",
  canonical: false,
  robots: "noindex, follow",
}

export type PublicPageMetaKey =
  | "home"
  | "house-clearance"
  | "probate-house-clearance"
  | "house-clearance-falkirk"
  | "house-clearance-stirling"
  | "house-clearance-cumbernauld"
  | "commercial-clearance"
  | "landlord-end-of-tenancy-clearance"
  | "professionals"
  | "privacy"
  | "ad-contact"
  | "ad-contact-thanks"
  | "ebay-auth-accepted"
  | "ebay-auth-declined"
  | "not-found"

const byKey: Record<PublicPageMetaKey, PageMeta> = {
  home,
  "house-clearance": houseClearance,
  "probate-house-clearance": probateHouseClearance,
  "house-clearance-falkirk": falkirkHouseClearance,
  "house-clearance-stirling": stirlingHouseClearance,
  "house-clearance-cumbernauld": cumbernauldHouseClearance,
  "commercial-clearance": commercialClearance,
  "landlord-end-of-tenancy-clearance": landlordEndOfTenancyClearance,
  professionals,
  privacy,
  "ad-contact": adContact,
  "ad-contact-thanks": adContactThanks,
  "ebay-auth-accepted": ebayAuthAccepted,
  "ebay-auth-declined": ebayAuthDeclined,
  "not-found": notFound,
}

export type ResolvedPageMeta = PageMeta & { url: string; canonicalUrl?: string }

function resolvePageMeta(page: PageMeta): ResolvedPageMeta {
  const url = `${SITE_ORIGIN}${page.path}`
  return {
    ...page,
    url,
    canonicalUrl: page.canonical === false ? undefined : url,
  }
}

export function getPageMeta(key: PublicPageMetaKey): ResolvedPageMeta {
  return resolvePageMeta(byKey[key])
}

export function getPageMetaForPath(path: string): ResolvedPageMeta | undefined {
  const pathname = path === "/" ? path : path.replace(/\/$/, "")
  const page = Object.values(byKey).find((candidate) => candidate.path === pathname)
  return page ? resolvePageMeta(page) : undefined
}

/**
 * Updates document head for SPA routes. Initial HTML for `/` matches index.html;
 * call with `home` on the home route so returning from `/privacy` restores tags.
 */
export function applyPageMeta(key: PublicPageMetaKey) {
  const p = getPageMeta(key)
  const url = p.url

  document.title = p.title

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", p.description)

  const existingCanonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (p.canonicalUrl) {
    const canonical = existingCanonical ?? document.createElement("link")
    canonical.setAttribute("rel", "canonical")
    canonical.setAttribute("href", p.canonicalUrl)

    if (!existingCanonical) {
      document.head.append(canonical)
    }
  } else {
    existingCanonical?.remove()
  }

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
