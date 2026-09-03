import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL = "https://www.crawfordhouseclearance.co.uk/professionals"

function ProfessionalsServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Property clearance for professionals",
      serviceType: "Professional property clearance support",
      url: PAGE_URL,
      description:
        "Practical property clearance for solicitors, executors, estate agents, landlords and letting agents across Central Scotland.",
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
          name: "Professionals",
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

const professionalNeeds = [
  {
    title: "Solicitors and executors",
    text: "Respectful probate clearance carried out to instructions agreed with the authorised estate contact, including belongings that must remain.",
  },
  {
    title: "Estate agents",
    text: "Access, keys and the required condition at handover agreed around property marketing, sale preparation or completion dates.",
  },
  {
    title: "Landlords and letting agents",
    text: "Unwanted contents cleared between tenancies so cleaning, repairs, inspection or re-letting can follow in the planned order.",
  },
  {
    title: "Other property professionals",
    text: "A defined clearance scope for properties that need to be prepared before valuation, sale, tenancy or onward work.",
  },
] as const

const processSteps = [
  {
    number: "01",
    title: "Nominate the authorised contact",
    text: "We confirm who can give instructions, approve the scope and receive updates about access and handover.",
  },
  {
    number: "02",
    title: "Define the clearance scope",
    text: "Rooms, contents, retained belongings and exclusions are recorded clearly before the work is booked.",
  },
  {
    number: "03",
    title: "Coordinate access and dates",
    text: "Key arrangements, property access and relevant sale, tenancy or onward-work dates are agreed in advance.",
  },
  {
    number: "04",
    title: "Complete and hand back",
    text: "The agreed areas are cleared and swept, keys are returned as arranged and waste documentation is available where applicable.",
  },
] as const

const faqs = [
  {
    question: "Can you work from instructions provided by a solicitor or executor?",
    answer:
      "Yes. We can coordinate with the authorised representative and agree the removal scope, retained belongings, access and handover before work begins.",
  },
  {
    question: "Can you arrange access without the client attending?",
    answer:
      "Where authorised access is available, key collection and return can be agreed with the nominated contact. We confirm the arrangements and who can approve any decisions in advance.",
  },
  {
    question: "How are items that must remain protected from removal?",
    answer:
      "They should be identified clearly when the scope is agreed. We work to the confirmed instructions and ask that any change is made through the nominated contact.",
  },
  {
    question: "What waste information can you provide?",
    answer:
      "Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449. Waste is taken to licensed facilities, with transfer documentation available where applicable.",
  },
] as const

export default function Professionals() {
  useEffect(() => {
    applyPageMeta("professionals")
  }, [])

  return (
    <>
      <ProfessionalsServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="Professionals"
        eyebrow="Property clearance across Central Scotland"
        title="Property Clearance for Professionals"
        introduction="A clear, practical process for solicitors, executors, estate agents, landlords, letting agents and other property contacts."
        imageSrc="/images/web/service_probate_03.webp"
        imageAlt="Property interior being assessed for a professional clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Practical coordination
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Clear Instructions from Quote to Handover
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Professional property work often involves several people and a
                fixed next step. We establish who is authorised to instruct us,
                what is being removed, what must remain and how access and
                handover should work before the clearance begins.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {professionalNeeds.map((item) => (
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
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                One agreed process
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Scope, Access, Communication and Handover
              </h2>
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

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                Probate and managed property work
              </p>
              <h2 className="text-3xl font-semibold text-white">
                The Right Service for the Property
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Probate work is handled carefully around the estate&apos;s
                instructions and retained belongings. Landlord and
                end-of-tenancy work focuses on preparing agreed areas for
                cleaning, repairs, inspection or re-letting. Each has its own
                detailed service page.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a
                  href="/probate-house-clearance"
                  className="text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  Probate house clearance
                </a>
                <a
                  href="/landlord-end-of-tenancy-clearance"
                  className="text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  Landlord and end-of-tenancy clearance
                </a>
              </div>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                Details That Help Us Quote Clearly
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>Property address and the authorised contact</li>
                <li>Rooms, storage areas and contents included</li>
                <li>Clearly identified belongings or fixtures that must remain</li>
                <li>Photographs or an inventory where available</li>
                <li>Access, parking and key arrangements</li>
                <li>Relevant sale, tenancy, cleaning or onward-work dates</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Working details
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              Professional Clearance FAQs
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
