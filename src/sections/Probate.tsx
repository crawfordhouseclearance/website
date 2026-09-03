import ServiceSectionGallery from "../components/ServiceSectionGallery"

export default function Probate() {
  return (
    <section id="probate" className="py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        <div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Probate House Clearance
          </h2>

          <p className="text-stone-400 leading-relaxed mb-6">
            Probate clearances often need careful coordination around access, what needs
            to remain, and any deadlines or handover dates. We can work with you directly
            or through your solicitor and fit around viewings and handovers.
          </p>

          <p className="text-stone-400 leading-relaxed">
            Where appropriate, we separate usable goods for donation or resale. Waste is
            removed and disposed of through licensed waste facilities, with transfer
            paperwork provided where applicable.
          </p>

          <a
            href="/probate-house-clearance"
            className="mt-7 inline-flex rounded-lg border border-border-soft px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-stone-500 hover:text-white"
          >
            More about probate house clearance
          </a>

        </div>


        <ServiceSectionGallery
          images={[
            {
              src: "/images/web/service_probate_01.webp",
              alt: "Probate house clearance — furnished room interior",
            },
            {
              src: "/images/web/service_probate_04.webp",
              alt: "Probate house clearance — room cleared and ready for handover",
            },
          ]}
        />

      </div>

    </section>
  )
}
