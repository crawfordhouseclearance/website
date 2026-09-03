import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/probate-house-clearance"

function ProbateServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Probate and bereavement house clearance",
      serviceType: "Probate house clearance",
      url: PAGE_URL,
      description:
        "Respectful probate and bereavement house clearance across Falkirk, Stirling and Central Scotland.",
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
          name: "Probate House Clearance",
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
    title: "Tell us what is needed",
    text: "We establish the property location, access, timescale and who is authorised to give instructions. Photos can help with an initial conversation.",
  },
  {
    number: "02",
    title: "Agree what stays and goes",
    text: "Items to retain are identified before work begins. We can coordinate directly with the family or with an executor, solicitor or estate agent.",
  },
  {
    number: "03",
    title: "Confirm the scope and price",
    text: "The work to be completed is agreed in advance, including any particular access, key-handling or handover arrangements.",
  },
  {
    number: "04",
    title: "Clear and hand back",
    text: "The property is cleared to the agreed scope, usable goods are separated where appropriate, and the space is left ready for its next stage.",
  },
] as const

const faqs = [
  {
    question: "Do I need to be at the property during the clearance?",
    answer:
      "Not necessarily. Access and instructions can be coordinated in advance with the authorised family member, executor, solicitor or estate agent. We will agree who the contact is and how the property should be handed back.",
  },
  {
    question: "Can some belongings be kept or separated?",
    answer:
      "Yes. Tell us clearly what must remain before the clearance starts. We can work from agreed instructions and separate usable goods for donation or resale where appropriate.",
  },
  {
    question: "Can you work around viewings or a property handover?",
    answer:
      "Yes, where the timing is agreed in advance. We can plan access and completion around viewings, sale preparation and handover dates.",
  },
  {
    question: "How is removed waste handled?",
    answer:
      "Waste is removed through licensed routes. Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449, and waste-transfer documentation is available where applicable.",
  },
] as const

export default function ProbateHouseClearance() {
  useEffect(() => {
    applyPageMeta("probate-house-clearance")
  }, [])

  return (
    <>
      <ProbateServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="Probate House Clearance"
        eyebrow="Falkirk, Stirling and Central Scotland"
        title="Probate and Bereavement House Clearance"
        introduction="A steady, respectful clearance service for families, executors and professionals. We agree what stays, what is removed and how the property should be left before work begins."
        imageSrc="/images/web/service_probate_01.webp"
        imageAlt="Furnished room before a probate house clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                A clear process
              </p>
              <h2 className="text-3xl font-semibold text-white">
                One Agreed Plan from Access to Handover
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Bereavement clearances can involve several people, important
                belongings and fixed property deadlines. The first job is to
                make the instructions unambiguous, then carry them through
                carefully.
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
                Families and professionals
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Coordinated Around the People Involved
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                We can work with the family directly or coordinate with an
                executor, solicitor or estate agent where that makes the
                process simpler. Access, keys, items to retain and the final
                handover are agreed before the clearance.
              </p>
              <p className="mt-5 leading-relaxed text-text-muted">
                In Scotland, the legal process is called confirmation—the
                Scottish equivalent of probate. Crawford House Clearance does
                not provide legal advice, but we can fit the practical
                clearance around the instructions and timings set by the
                estate&apos;s authorised representatives.
              </p>
              <a
                href="https://www.scotcourts.gov.uk/taking-action/dealing-with-a-deceaseds-estate-in-scotland/guide-to-dealing-with-a-deceaseds-estate-in-scotland"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm text-stone-200 underline underline-offset-4 hover:text-white"
              >
                Official Scottish Courts guidance on confirmation
              </a>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">
                The Agreed Clearance Can Include
              </h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>Full properties or selected rooms and storage areas</li>
                <li>Furniture, general contents and white goods</li>
                <li>Lofts, garages, sheds and outbuildings</li>
                <li>Separation of clearly identified items to retain</li>
                <li>Usable items set aside for donation or resale where appropriate</li>
                <li>A final sweep-through ready for sale, viewing or handover</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                  Recent work
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Probate Clearance in Stirling
                </h2>
                <p className="mt-5 leading-relaxed text-text-muted">
                  A full house clearance was completed room by room around the
                  probate process. Usable items were separated where
                  appropriate, general waste was removed through licensed
                  routes and the property was left ready for handover.
                </p>
                <a
                  href="/house-clearance-stirling"
                  className="mt-6 inline-block text-sm text-stone-200 underline underline-offset-4 hover:text-white"
                >
                  See our house clearance service in Stirling
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <figure>
                  <img
                    src="/images/web/case_probate_room_before.webp"
                    alt="Living room before probate clearance in Stirling"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-text-muted">Before</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/web/case_probate_room_after.webp"
                    alt="Living room after probate clearance in Stirling"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border-soft object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-text-muted">After</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Practical questions
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              Probate Clearance FAQs
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
