import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL = "https://www.crawfordhouseclearance.co.uk/house-clearance"

function HouseClearanceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "House clearance",
      serviceType: "Domestic house clearance",
      url: PAGE_URL,
      description:
        "Full and partial house clearance for homeowners, families, landlords and tenants across Central Scotland.",
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
          name: "House Clearance",
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

const processSteps = [
  {
    number: "01",
    title: "Show us what needs cleared",
    text: "Tell us the property location, the rooms or areas involved and what needs to remain. Photographs can help us understand the work initially.",
  },
  {
    number: "02",
    title: "Agree access and timing",
    text: "We confirm practical details such as keys, parking, stairs and any date the property needs to be ready for its next stage.",
  },
  {
    number: "03",
    title: "Confirm the scope and price",
    text: "The removal list, retained belongings and price are agreed before work starts so everyone is working to the same plan.",
  },
  {
    number: "04",
    title: "Clear the agreed areas",
    text: "We complete the agreed clearance, separate usable items where appropriate and sweep the cleared areas before handover.",
  },
] as const

const faqs = [
  {
    question: "Can you clear only part of a house?",
    answer:
      "Yes. We undertake full and partial clearances, including individual rooms, lofts, garages and sheds. The areas included are confirmed as part of the quote.",
  },
  {
    question: "How do I make sure certain belongings stay?",
    answer:
      "Identify anything that must remain before work begins. We agree those instructions with you and work to the confirmed removal list.",
  },
  {
    question: "Can I send photographs for an initial quote?",
    answer:
      "Yes. Photographs sent by WhatsApp can help with an initial assessment. We may ask for more details or arrange to view the property before confirming the work and price.",
  },
  {
    question: "What happens to the items you remove?",
    answer:
      "Usable items are separated for donation or resale where appropriate. Waste is taken to licensed waste facilities. Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449.",
  },
] as const

export default function HouseClearance() {
  useEffect(() => {
    applyPageMeta("house-clearance")
  }, [])

  return (
    <>
      <HouseClearanceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="House Clearance"
        eyebrow="Domestic clearance across Central Scotland"
        title="Full and Partial House Clearance"
        introduction="Practical clearance for whole homes or selected rooms. We agree what goes, what stays, access and the price before work begins."
        imageSrc="/images/web/service_domestic_1.webp"
        imageAlt="Kitchen and household contents before a house clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                A straightforward service
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Clear Only What You Need Cleared
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                A house clearance may cover an entire property or only the
                rooms and contents you no longer need. We can remove furniture,
                white goods and general household contents from the agreed
                areas, including lofts, garages and sheds where included.
              </p>
              <p className="mt-5 leading-relaxed text-text-muted">
                Homeowners, families, landlords and tenants can all arrange a
                clearance. The important part is agreeing who can give
                instructions and making retained belongings clear before work
                starts.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <li key={step.number} className="card-surface p-7 md:p-8">
                  <p className="text-sm font-semibold tracking-[0.16em] text-stone-300">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-text-muted">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Before work begins
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Belongings, Access and the Next Step
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Tell us about items that must remain, restricted areas and any
                access considerations. This might include key collection,
                parking, stairs, lifts or working around a move, sale or other
                property appointment.
              </p>
              <p className="mt-5 leading-relaxed text-text-muted">
                Once complete, the agreed areas are swept and left ready for
                whatever comes next. If the property is being prepared between
                tenancies, our dedicated landlord and end-of-tenancy page
                explains that process in more detail.
              </p>
              <a
                href="/landlord-end-of-tenancy-clearance"
                className="mt-6 inline-block text-sm text-stone-200 underline underline-offset-4 hover:text-white"
              >
                Landlord and end-of-tenancy clearance
              </a>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                Helpful Details for an Initial Assessment
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>The property postcode and type of home</li>
                <li>The rooms, lofts, garages or sheds to be cleared</li>
                <li>Photographs showing the volume and type of contents</li>
                <li>Furniture, white goods and bulky items included</li>
                <li>Anything that must remain at the property</li>
                <li>Access arrangements and relevant dates</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Responsible removal
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Reuse Where Appropriate, Licensed Disposal for Waste
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Usable goods can be separated for donation or resale where
                appropriate. Remaining waste is taken to licensed waste
                facilities by a SEPA-registered waste carrier. This gives you a
                clear route for the contents leaving the property.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/web/service_domestic_2.webp"
                alt="Household furniture and contents in a room"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
              />
              <img
                src="/images/web/service_domestic_04.webp"
                alt="Interior after household contents have been cleared"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Practical questions
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              House Clearance FAQs
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
