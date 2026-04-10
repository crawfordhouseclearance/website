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
            Probate clearances need steady coordination: access, what stays versus what
            goes, and your timings. We work with you directly or via your solicitor, and
            we fit around viewings and handovers.
          </p>

          <p className="text-stone-400 leading-relaxed">
            Where it helps, we separate usable goods for donation or resale; the rest is
            cleared and disposed of legally, with waste transfer notes and a clear record
            of what left the property.
          </p>

        </div>


        <ServiceSectionGallery
          images={[
            "/images/web/service_probate_01.webp",
            "/images/web/service_probate_04.webp",
          ]}
        />

      </div>

    </section>
  )
}
