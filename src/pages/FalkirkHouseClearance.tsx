import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/house-clearance-falkirk"

function FalkirkServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "House clearance in Falkirk",
      serviceType: "House clearance",
      url: PAGE_URL,
      description:
        "Full and partial house clearance in Falkirk, with agreed pricing and waste removed through licensed routes.",
      areaServed: ["Falkirk", "Larbert", "Grangemouth", "Central Scotland"],
      provider: {
        "@type": "LocalBusiness",
        name: "Crawford House Clearance",
        url: "https://www.crawfordhouseclearance.co.uk/",
        telephone: "+447459420152",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.crawfordhouseclearance.co.uk/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "House Clearance Falkirk",
          item: PAGE_URL,
        },
      ],
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const services = [
  {
    title: "Full and partial house clearance",
    text: "Whole properties, selected rooms or individual storage areas cleared to an agreed list, including furniture, white goods and general contents.",
  },
  {
    title: "Probate and bereavement clearance",
    text: "Respectful practical support for families and executors, with access, retained belongings and handover instructions agreed in advance.",
  },
  {
    title: "Garages, lofts and outbuildings",
    text: "Accumulated household contents and general waste removed so storage areas can be used again or included in a property handover.",
  },
  {
    title: "Landlord and commercial clearance",
    text: "Clearance for properties between tenancies and for offices, retail units or other premises, planned around access and the next stage of work.",
  },
] as const

const faqs = [
  {
    question: "Do you provide both full and partial clearances in Falkirk?",
    answer:
      "Yes. The agreed work can cover a whole property, selected rooms or individual areas such as a loft, garage or shed. The scope is confirmed before work begins.",
  },
  {
    question: "Can I send photos for an initial quote?",
    answer:
      "Yes. Send photographs by WhatsApp along with the Falkirk property location and a short description of what needs removed. We will let you know if an in-person visit is needed before confirming the work.",
  },
  {
    question: "What if some belongings need to remain?",
    answer:
      "Identify those items clearly before the clearance. We work to the agreed instructions so retained belongings and fixtures are not included in the removal scope.",
  },
  {
    question: "How is the waste from a Falkirk clearance handled?",
    answer:
      "Waste is removed through licensed routes. Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449, with transfer documentation available where applicable.",
  },
] as const

export default function FalkirkHouseClearance() {
  useEffect(() => {
    applyPageMeta("house-clearance-falkirk")
  }, [])

  return (
    <>
      <FalkirkServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="House Clearance Falkirk"
        eyebrow="Local clearance across the Falkirk area"
        title="House Clearance in Falkirk"
        introduction="Full and partial property clearances with the scope and price agreed before work begins. We clear homes, storage areas and managed properties across Falkirk and nearby parts of Central Scotland."
        imageSrc="/images/web/case_domestic_kitchen_before_full.webp"
        imageAlt="Kitchen before a domestic house clearance in Falkirk"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Property clearance services
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Clearance Matched to the Property and Its Next Step
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                A clearance may be needed before a move, sale, new tenancy or
                building work—or simply to make an overfilled room usable
                again. We establish what must remain and what should be removed
                before giving the job a clear scope.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="card-surface p-7 md:p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  Recent work in Falkirk
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Partial Domestic Clearance
                </h2>
                <p className="mt-5 leading-relaxed text-text-muted">
                  This Falkirk job focused on the main lived-in areas of the
                  property. Kitchen and bedroom contents were removed through
                  licensed routes and the rooms were left ready for the
                  owner&apos;s next step, whether further cleaning, re-letting or
                  onward work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <img
                    src="/images/web/case_domestic_kitchen_before.webp"
                    alt="Kitchen before domestic house clearance in Falkirk"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-text-muted">Before</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/web/case_domestic_kitchen_after.webp"
                    alt="Kitchen after domestic house clearance in Falkirk"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-text-muted">After</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  From enquiry to handover
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  A Straightforward Clearance Process
                </h2>
                <ol className="mt-8 space-y-6 text-text-muted">
                  <li>
                    <span className="font-semibold text-white">1. Show us the work.</span>{" "}
                    Send the property location, a description and photos where possible.
                  </li>
                  <li>
                    <span className="font-semibold text-white">2. Agree the scope.</span>{" "}
                    We confirm what is being removed, what remains, access and the price.
                  </li>
                  <li>
                    <span className="font-semibold text-white">3. Complete the clearance.</span>{" "}
                    Contents are removed through licensed routes and the agreed areas are swept through.
                  </li>
                </ol>
              </div>

              <aside className="card-surface p-8">
                <h3 className="text-xl font-semibold text-white">
                  Falkirk and Nearby Coverage
                </h3>
                <p className="mt-5 leading-relaxed text-text-muted">
                  Crawford House Clearance works across Falkirk, Larbert,
                  Grangemouth and the surrounding Central Scotland service
                  area. If the property is nearby, send the postcode and we
                  will confirm coverage.
                </p>
                <p className="mt-5 leading-relaxed text-text-muted">
                  For an estate clearance, see our dedicated{" "}
                  <a
                    href="/probate-house-clearance"
                    className="text-stone-200 underline underline-offset-4 hover:text-white"
                  >
                    probate and bereavement clearance service
                  </a>
                  .
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Practical questions
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              Falkirk House Clearance FAQs
            </h2>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card-surface group p-6">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  )
}
