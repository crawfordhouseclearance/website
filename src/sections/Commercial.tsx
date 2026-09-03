import ServiceSectionGallery from "../components/ServiceSectionGallery"

export default function Commercial() {
  return (
    <section id="commercial" className="py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        <ServiceSectionGallery
          images={[
            {
              src: "/images/web/service_commercial_01.webp",
              alt: "Commercial clearance — office or retail interior",
            },
            {
              src: "/images/web/service_commercial_02.webp",
              alt: "Commercial clearance — unit or stock removal",
            },
            {
              src: "/images/web/service_commercial_03.webp",
              alt: "Commercial clearance — premises during clearance",
            },
            {
              src: "/images/web/service_commercial_04.webp",
              alt: "Commercial clearance — waste and materials removed",
            },
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
            Waste is removed and disposed of through licensed waste facilities, with
            transfer paperwork provided where applicable. When we are finished, floors
            and access routes are left clear for the next contractor or handover.
          </p>

          <a
            href="/commercial-clearance"
            className="mt-7 inline-flex rounded-lg border border-border-soft px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-stone-500 hover:text-white"
          >
            More about commercial clearance
          </a>

        </div>

      </div>

    </section>
  )
}
