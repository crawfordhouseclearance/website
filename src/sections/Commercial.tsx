import ServiceSectionGallery from "../components/ServiceSectionGallery"

export default function Commercial() {
  return (
    <section id="commercial" className="py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        <ServiceSectionGallery
          images={[
            "/images/web/service_commercial_01.webp",
            "/images/web/service_commercial_02.webp",
            "/images/web/service_commercial_03.webp",
            "/images/web/service_commercial_04.webp",
          ]}
        />

        <div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Commercial Clearance
          </h2>

          <p className="text-stone-400 mb-6 leading-relaxed">
            From a single unit refit to a full strip-out, we clear furniture, stock,
            fittings and general waste. We can often work around your hours if the
            premises are still partly in use—say what you need and we will plan
            around it.
          </p>

          <p className="text-stone-400 leading-relaxed">
            Everything goes through licensed routes with SEPA-compliant paperwork.
            When we are finished, floors and access routes are left clear for the next
            contractor or handover—not blocked with debris.
          </p>

        </div>

      </div>

    </section>
  )
}
