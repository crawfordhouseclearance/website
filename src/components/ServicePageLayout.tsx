import type { ReactNode } from "react"
import ContactForm from "./ContactForm"
import Footer from "./Footer"
import Header from "./Header"

type ServicePageLayoutProps = {
  breadcrumbLabel: string
  eyebrow: string
  title: string
  introduction: string
  imageSrc: string
  imageAlt: string
  children: ReactNode
}

export default function ServicePageLayout({
  breadcrumbLabel,
  eyebrow,
  title,
  introduction,
  imageSrc,
  imageAlt,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-text-main">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border-soft py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-stone-300">
                  {breadcrumbLabel}
                </li>
              </ol>
            </nav>

            <div className="grid gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  {eyebrow}
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                  {introduction}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:07459420152"
                    className="inline-flex items-center justify-center rounded-lg bg-cta px-7 py-3.5 font-semibold text-brand-deep transition hover:bg-cta-hover"
                  >
                    Call 07459 420152
                  </a>
                  <a
                    href="https://wa.me/447459420152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-border-soft px-7 py-3.5 font-medium text-text-main transition hover:border-stone-500 hover:text-white"
                  >
                    Send Photos on WhatsApp
                  </a>
                </div>
              </div>

              <figure className="overflow-hidden rounded-xl border border-border-soft bg-card-surface shadow-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="aspect-[4/3] h-full w-full object-cover"
                  fetchPriority="high"
                />
              </figure>
            </div>
          </div>
        </section>

        {children}

        <section id="quote" className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                No-obligation enquiry
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Tell Us About the Property
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
                Send the property location, the areas that need to be cleared and any
                timing or access details. Photographs can be sent separately by
                WhatsApp if that is easier.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
