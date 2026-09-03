import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/commercial-clearance"

function CommercialServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Commercial property clearance",
      serviceType: "Commercial clearance",
      url: PAGE_URL,
      description:
        "Commercial property clearance across Falkirk, Stirling and Central Scotland, including furniture, stock, fittings and general waste.",
      areaServed: ["Falkirk", "Stirling", "Larbert", "Grangemouth", "Central Scotland"],
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
          name: "Commercial Clearance",
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

const clearanceTypes = [
  {
    title: "Office clearance",
    text: "Desks, chairs, storage furniture, loose contents and general waste removed from the agreed areas before a move, refit or handover.",
  },
  {
    title: "Retail and unit clearance",
    text: "Stock, furniture, fittings and general contents cleared from shops and commercial units to the scope agreed before work starts.",
  },
  {
    title: "Landlord and managed property work",
    text: "Clearance coordinated with landlords, estate agents and other property contacts around access, keys and the required handover condition.",
  },
  {
    title: "Refit and strip-out preparation",
    text: "Removable fittings, furniture and general waste cleared so access routes and floors are ready for the next contractor or stage of work.",
  },
] as const

const faqs = [
  {
    question: "Can clearance work be planned around business hours?",
    answer:
      "Where the premises are still partly in use, tell us the operating and access constraints when you enquire. We will agree a workable clearance plan before confirming the job.",
  },
  {
    question: "Can you clear both furniture and stock?",
    answer:
      "Yes, where those items are included in the agreed scope. Send an inventory or photographs where possible so the volume and type of material can be assessed before the price is confirmed.",
  },
  {
    question: "Do you work with landlords and property professionals?",
    answer:
      "Yes. We can coordinate access, keys, instructions and handover with the authorised landlord, estate agent or other professional property contact.",
  },
  {
    question: "What disposal paperwork is available?",
    answer:
      "Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449. Waste goes through licensed routes and transfer documentation is available where applicable.",
  },
] as const

export default function CommercialClearance() {
  useEffect(() => {
    applyPageMeta("commercial-clearance")
  }, [])

  return (
    <>
      <CommercialServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="Commercial Clearance"
        eyebrow="Falkirk, Stirling and Central Scotland"
        title="Commercial Property Clearance"
        introduction="Clearance for offices, shops, units and managed premises, with access, the removal scope and the required handover condition agreed before work begins."
        imageSrc="/images/web/service_commercial_01.webp"
        imageAlt="Commercial premises prepared for property clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Commercial clearance services
              </p>
              <h2 className="text-3xl font-semibold text-white">
                A Practical Scope for the Premises
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Commercial spaces often have fixed access times, several types
                of contents and another contractor or tenant waiting for the
                property. We define what is being removed and how the cleared
                areas should be left before the work is booked.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clearanceTypes.map((clearance) => (
                <article key={clearance.title} className="card-surface p-7 md:p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {clearance.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {clearance.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Planned around the site
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Access, Contents and Handover Agreed Upfront
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                If part of the premises remains in use, we can plan around the
                agreed working hours and access arrangements. The instruction
                should identify any furniture, stock or fittings that remain,
                as well as the rooms and routes included in the clearance.
              </p>
              <p className="mt-5 leading-relaxed text-text-muted">
                At completion, the agreed floors and access routes are left
                clear for the next contractor, property inspection or handover.
              </p>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                Useful Details for a Quote
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>The premises location and type of business space</li>
                <li>The rooms, floors or units included in the work</li>
                <li>Photographs or an inventory of furniture, stock and fittings</li>
                <li>Vehicle access, stairs, lifts and permitted working hours</li>
                <li>The required completion or handover date</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  Clearance examples
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Commercial Interiors and Units
                </h2>
                <p className="mt-5 leading-relaxed text-text-muted">
                  We can clear furniture, loose stock, removable fittings and
                  general waste from offices, retail spaces and other
                  commercial premises. The exact removal list is confirmed as
                  part of the quote.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/web/service_commercial_02.webp"
                  alt="Furniture and contents in a commercial clearance area"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                />
                <img
                  src="/images/web/service_commercial_04.webp"
                  alt="Commercial premises during clearance work"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Service area
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Commercial Clearance Across Central Scotland
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
                We cover Falkirk, Stirling, Larbert, Grangemouth and the
                surrounding Central Scotland service area. Send the premises
                postcode and access details so we can confirm coverage and the
                right way to assess the work.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                <a
                  href="/house-clearance-falkirk"
                  className="text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  Clearance in Falkirk
                </a>
                <a
                  href="/house-clearance-stirling"
                  className="text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  Clearance in Stirling
                </a>
              </div>
            </div>

            <h2 className="text-center text-3xl font-semibold text-white">
              Commercial Clearance FAQs
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
