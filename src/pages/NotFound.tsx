import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { applyPageMeta } from "../seo/pageMeta"

export default function NotFound() {
  useEffect(() => {
    applyPageMeta("not-found")
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Page not found
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white">We Can&apos;t Find That Page</h1>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-text-muted">
              The address may have changed or been typed incorrectly. Return to
              the homepage to view our clearance services and contact details.
            </p>
            <a
              href="/"
              className="mt-9 inline-flex rounded-lg bg-cta px-7 py-3.5 font-semibold text-brand-deep transition hover:bg-cta-hover"
            >
              Return to Homepage
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
