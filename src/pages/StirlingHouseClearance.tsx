import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/house-clearance-stirling"

function StirlingServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "House clearance in Stirling",
      serviceType: "House clearance",
      url: PAGE_URL,
      description:
        "Full and partial house clearance in Stirling for homes, estates and managed properties.",
      areaServed: ["Stirling", "Central Scotland"],
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
          name: "House Clearance Stirling",
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
    title: "Whole-home clearance",
    text: "Furniture, white goods and general contents removed from the agreed areas, which are then swept and left ready for the property's next stage.",
  },
  {
    title: "Probate and estate clearance",
    text: "Clear instructions agreed with the family, executor or professional contact, including access, belongings to retain and final handover.",
  },
  {
    title: "Moves and managed properties",
    text: "Full or selected-room clearances for moves, downsizing and properties between tenancies, planned around the required date and access.",
  },
  {
    title: "Commercial premises",
    text: "Furniture, stock, fittings and general waste cleared from offices, retail units and other premises to an agreed practical scope.",
  },
] as const

const faqs = [
  {
    question: "Can you clear a property in Stirling if I live elsewhere?",
    answer:
      "Yes, provided access and authority to give instructions are clear. We can coordinate keys, retained items and handover with the authorised family member, executor, solicitor or estate agent.",
  },
  {
    question: "Can the clearance be arranged around a sale or handover?",
    answer:
      "Yes. Tell us the relevant date when you enquire. We will agree the work and access arrangements around the property timetable before confirming the job.",
  },
  {
    question: "Do you clear individual rooms and storage areas?",
    answer:
      "Yes. A clearance can cover selected rooms, lofts, garages or sheds as well as a whole property. The exact areas and items are agreed in advance.",
  },
  {
    question: "Are you registered to carry waste from the property?",
    answer:
      "Yes. Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449. Waste is disposed of through licensed waste facilities, with transfer documentation available where applicable.",
  },
] as const

export default function StirlingHouseClearance() {
  useEffect(() => {
    applyPageMeta("house-clearance-stirling")
  }, [])

  return (
    <>
      <StirlingServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="House Clearance in Stirling"
        eyebrow="Property clearance across Stirling"
        title="House Clearance in Stirling"
        introduction="Practical full and partial clearances for homes, estates and managed properties. We agree access, what must remain, the removal scope and the price before work begins."
        imageSrc="/images/web/case_probate_room_before_full.webp"
        imageAlt="Living room before a house clearance in Stirling"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                House clearance services
              </p>
              <h2 className="text-3xl font-semibold text-white">
                A Clear Scope Agreed in Advance
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Every property has different instructions. We start by
                identifying the areas involved, anything that must remain and
                the condition required at the end. That keeps the quote and the
                handover clear for everyone involved.
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
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  Completed in Stirling
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Full Probate House Clearance
                </h2>
                <p className="mt-5 leading-relaxed text-text-muted">
                  This house was cleared room by room around the probate
                  process. Usable items were separated where appropriate,
                  general waste was taken to licensed waste facilities and the
                  property was left ready for handover.
                </p>
                <a
                  href="/probate-house-clearance"
                  className="mt-6 inline-block text-sm text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  Read about our probate clearance service
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <img
                    src="/images/web/case_probate_room_before.webp"
                    alt="Living room before probate house clearance in Stirling"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-text-muted">Before</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/web/case_probate_room_after.webp"
                    alt="Living room after probate house clearance in Stirling"
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
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Planned before work starts
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Preparing the Property for What Comes Next
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                A house clearance in Stirling may need to line up with a viewing,
                tenancy, sale or professional handover. We confirm the contact,
                access and finish required in advance, rather than leaving
                those decisions until the clearance is underway.
              </p>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                Details We Agree With You
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>The rooms, storage areas and outbuildings included</li>
                <li>Items, fixtures or white goods that must remain</li>
                <li>Who provides access and receives the property afterwards</li>
                <li>The agreed price and any relevant property deadline</li>
                <li>Whether transfer documentation is required</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Service area
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Stirling and Central Scotland
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
                We cover Stirling and the surrounding Central Scotland service
                area. Send the property postcode when you enquire and we will
                confirm coverage along with the most suitable way to assess the
                clearance.
              </p>
            </div>

            <h2 className="text-center text-3xl font-semibold text-white">
              House Clearance in Stirling: FAQs
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
