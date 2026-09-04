import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppContent } from "./App"
import { getPageMetaForPath } from "./seo/pageMeta"

export const prerenderPaths = [
  "/",
  "/privacy",
  "/house-clearance",
  "/probate-house-clearance",
  "/commercial-clearance",
  "/landlord-end-of-tenancy-clearance",
  "/professionals",
  "/house-clearance-falkirk",
  "/house-clearance-stirling",
  "/house-clearance-cumbernauld",
  "/ad-contact",
  "/ad-contact/thanks",
  "/ebay/auth/accepted",
  "/ebay/auth/declined",
  "/404",
] as const

export function render(url: string) {
  const meta = getPageMetaForPath(url)

  if (!meta) {
    throw new Error(`No page metadata is registered for ${url}`)
  }

  return {
    html: renderToString(
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>,
    ),
    meta,
  }
}
