import { useEffect } from "react"
import ServicePageLayout from "../components/ServicePageLayout"
import { applyPageMeta } from "../seo/pageMeta"

const PAGE_URL =
  "https://www.crawfordhouseclearance.co.uk/house-clearance-cumbernauld"

function CumbernauldServiceJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "House clearance in Cumbernauld",
      serviceType: "House clearance",
      url: PAGE_URL,
      description:
        "Practical full and partial house clearance in Cumbernauld, with scope, access and pricing agreed before work begins.",
      areaServed: ["Cumbernauld", "Central Scotland"],
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
          name: "House Clearance Cumbernauld",
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

const clearanceServices = [
  {
    title: "Full and partial house clearances",
    text: "Clearance can cover a whole home, selected rooms, a garage, loft or other storage space. We agree the areas and contents to be removed before the work is booked.",
  },
  {
    title: "Probate and estate clearance",
    text: "For families, executors and professional contacts, we work from clear instructions on access, belongings to retain and the condition needed for handover.",
  },
  {
    title: "Landlord and end-of-tenancy clearance",
    text: "When a property needs to be prepared for its next tenant, inspection or onward work, the clearance is planned around the agreed date, access and removal scope.",
  },
  {
    title: "Commercial and managed property clearance",
    text: "Furniture, fittings, stock and general contents can be cleared from offices, units and managed premises where this is part of the agreed job.",
  },
] as const

const faqs = [
  {
    question: "What information do you need to quote for a house clearance in Cumbernauld?",
    answer:
      "Send the property postcode, photographs where possible, the areas involved and anything that must remain. We will use that information to confirm the most suitable way to assess the work before agreeing a price.",
  },
  {
    question: "Can you clear a property after a bereavement or for an executor?",
    answer:
      "Yes. We can work from instructions provided by the authorised family member, executor or professional contact. Retained belongings, access and the handover arrangements are agreed before work begins.",
  },
  {
    question: "How are reusable items and waste handled?",
    answer:
      "Where appropriate, usable items can be separated for reuse. Waste is disposed of through licensed waste facilities. Crawford House Clearance is a SEPA-registered waste carrier, registration WCR/R/3023449, with transfer documentation available where applicable.",
  },
  {
    question: "Do you cover properties near Cumbernauld as well?",
    answer:
      "Crawford House Clearance serves Cumbernauld and the wider Central Scotland area. Share the property postcode when you enquire and we will confirm whether the location is within coverage.",
  },
] as const

export default function CumbernauldHouseClearance() {
  useEffect(() => {
    applyPageMeta("house-clearance-cumbernauld")
  }, [])

  return (
    <>
      <CumbernauldServiceJsonLd />

      <ServicePageLayout
        breadcrumbLabel="House Clearance in Cumbernauld"
        eyebrow="Practical property clearance in Cumbernauld"
        title="House Clearance in Cumbernauld"
        introduction="Full and partial house clearances for homes, estates, landlords and managed properties. We agree what will be removed, what must stay, access and the price before work begins."
        imageSrc="/images/web/case_domestic_bedroom_before_full.webp"
        imageAlt="Bedroom before a domestic property clearance"
      >
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                House clearance services
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Clear Instructions From the First Enquiry
              </h2>
              <p className="mt-5 leading-relaxed text-text-muted">
                Whether the work is prompted by a move, probate, a tenancy change
                or an overfilled property, a clear plan helps everyone. We start
                with the property details, the items that must remain and the
                access available, then agree exactly what the clearance will cover.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clearanceServices.map((service) => (
                <article key={service.title} className="card-surface p-7 md:p-8">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-text-muted">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
                A simple process
              </p>
              <h2 className="text-3xl font-semibold text-white">
                A Simple Clearance Process
              </h2>
              <ol className="mt-8 space-y-6 text-text-muted">
                <li><span className="font-semibold text-white">1. Tell us about the property.</span> Send the location, photos and a brief outline of what needs to be cleared.</li>
                <li><span className="font-semibold text-white">2. Set the instructions.</span> We agree the included areas, retained items, access, timing and price.</li>
                <li><span className="font-semibold text-white">3. Complete the agreed clearance.</span> Contents are taken to licensed waste facilities and the agreed areas are swept.</li>
              </ol>
            </div>

            <aside className="card-surface p-8">
              <h3 className="text-xl font-semibold text-white">Useful Details to Send</h3>
              <ul className="mt-6 space-y-3 text-text-muted">
                <li>The Cumbernauld property postcode and the rooms involved</li>
                <li>Photographs of the contents and any access constraints</li>
                <li>Items, fixtures or paperwork that must remain</li>
                <li>Any sale, tenancy, inspection or handover date</li>
                <li>The authorised contact for decisions and access</li>
              </ul>
              <p className="mt-6 leading-relaxed text-text-muted">
                For an estate clearance, see our dedicated{" "}
                <a href="/probate-house-clearance" className="text-stone-200 underline underline-offset-4 hover:text-white">
                  probate and bereavement clearance service
                </a>.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">
              Licensed waste handling
            </p>
            <h2 className="text-center text-3xl font-semibold text-white">
              Responsible Waste Disposal
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-text-muted">
              Where appropriate, usable items are separated for reuse. Waste is
              disposed of through licensed waste facilities, and we agree in advance
              what will be removed and what will be left in place.
            </p>
          </div>
        </section>

        <section className="section-surface section-divider py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-300">Service area</p>
              <h2 className="text-3xl font-semibold text-white">Cumbernauld and Central Scotland</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
                We provide house clearance in Cumbernauld as part of our Central Scotland service area. Send the postcode and a short description of the work, and we will confirm coverage and the next step.
              </p>
            </div>

            <h2 className="text-center text-3xl font-semibold text-white">House Clearance in Cumbernauld: FAQs</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card-surface group p-6">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-white">{faq.question}</summary>
                  <p className="mt-4 leading-relaxed text-text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  )
}
