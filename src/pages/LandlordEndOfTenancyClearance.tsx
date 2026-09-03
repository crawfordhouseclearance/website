import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/landlord-end-of-tenancy-clearance"

function LandlordClearanceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Landlord and end-of-tenancy clearance",
      serviceType: "End-of-tenancy property clearance",
      url: PAGE_URL,
      description:
        "Clearance of unwanted furniture and contents for landlords, letting agents and tenants across Central Scotland.",
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
          name: "Landlord and End-of-Tenancy Clearance",
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

const clearanceNeeds = [
  {
    title: "Remaining furniture and contents",
    text: "Unwanted furniture, white goods and general contents removed from the rooms included in the agreed scope.",
  },
  {
    title: "Between-tenancy clearance",
    text: "Items left behind can be cleared so the agreed areas are ready for cleaning, repairs, inspection or re-letting.",
  },
  {
    title: "Managed access",
    text: "Keys, property access and handover can be coordinated with the authorised landlord, letting agent, tenant or property contact.",
  },
  {
    title: "Retained items",
    text: "Fixtures, appliances, furnishings or personal belongings that must remain are identified before clearance work begins.",
  },
] as const

const faqs = [
  {
    question: "Can you collect keys from a landlord or letting agent?",
    answer:
      "Access and key arrangements can be agreed with the authorised property contact before the job. We also confirm how keys should be returned and who will receive the handover.",
  },
  {
    question: "Can you remove items left by a former tenant?",
    answer:
      "We can remove unwanted furniture and contents when the person instructing us is authorised to do so. The removal list and any items that must stay are agreed in advance.",
  },
  {
    question: "Can clearance be arranged around repairs or cleaning?",
    answer:
      "Yes, where the sequence and timing are agreed before booking. Tell us when other work is planned and the condition in which the cleared areas need to be handed over.",
  },
  {
    question: "Is waste documentation available?",
    answer:
      "Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449. Waste is taken to licensed waste facilities, with transfer documentation available where applicable.",
  },
] as const

export default function LandlordEndOfTenancyClearance() {
  useEffect(() => {
    applyPageMeta("landlord-end-of-tenancy-clearance")
  }, [])

  return (
    <>
      <LandlordClearanceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="Landlord and End-of-Tenancy Clearance"
        eyebrow="Landlords, letting agents and tenants"
        title="Landlord and End-of-Tenancy Clearance"
        introduction="Clearance of unwanted furniture and contents between tenancies, with the removal scope, access and handover agreed before work starts."
        imageSrc="/images/web/service_domestic_03.webp"
        imageAlt="Bedroom contents before an end-of-tenancy clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Between tenancies
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Prepare the Property for Its Next Stage
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                When unwanted items remain after a tenancy, the clearance needs
                to fit around access, cleaning, repairs and the next handover.
                We agree the rooms and contents to be cleared, what must remain
                and the relevant dates before confirming the work.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clearanceNeeds.map((item) => (
                <article key={item.title} className="card-surface p-7 md:p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {item.text}
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
                Clear instructions
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Access, Authority and Handover
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                The landlord, letting agent, tenant or other property contact
                arranging the clearance must be authorised to instruct us. We
                agree who will provide access, which items are to be removed and
                how the property and keys should be handed back.
              </p>
              <p className="mt-5 leading-relaxed text-text-muted">
                If fixtures, appliances or furnishings are staying for the next
                tenancy, identify them clearly before work begins. The agreed
                areas are swept after clearance, ready for the cleaning, repair
                or inspection work that follows.
              </p>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                What to Send for a Quote
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>The property postcode and rooms to be cleared</li>
                <li>Photographs of the furniture and remaining contents</li>
                <li>A list of fixtures, appliances or belongings that must stay</li>
                <li>Parking, stairs and other access considerations</li>
                <li>Key collection and return arrangements</li>
                <li>The date needed for cleaning, repairs or handover</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Licensed waste handling
              </p>
              <h2 className="text-3xl font-semibold text-white">
                A Documented Route for Removed Waste
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Crawford House Clearance is a SEPA-registered waste carrier.
                Waste is taken to licensed facilities, and transfer
                documentation is available where applicable. Usable items can
                be separated for donation or resale where appropriate.
              </p>
              <a
                href="/professionals"
                className="mt-6 inline-block text-sm text-stone-200 underline underline-offset-4 hover:text-white"
              >
                Information for letting agents and property professionals
              </a>
            </div>

            <img
              src="/images/web/service_domestic_04.webp"
              alt="Interior ready for cleaning or onward property work"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
            />
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Practical questions
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              Landlord and End-of-Tenancy FAQs
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
