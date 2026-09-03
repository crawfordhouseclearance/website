import ServiceSectionGallery from "../components/ServiceSectionGallery"

export default function Domestic() {
  return (
    <section id="domestic" className="section-surface py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        <div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Domestic House Clearance
          </h2>

          <p className="text-stone-400 mb-6 leading-relaxed">
            We clear whole homes or single rooms—lofts, garages and sheds included—
            for moves, downsizing, bereavement, or between tenancies. Tell us what
            must remain (fixtures, white goods, specific items) and we work to that
            list.
          </p>

          <p className="text-stone-400 leading-relaxed">
            We agree the work and price before we start. Once the clearance is
            complete, we sweep the agreed areas so the property is ready for sale,
            re-letting or whatever comes next.
          </p>

          <a
            href="/house-clearance-falkirk"
            className="mt-7 inline-flex rounded-lg border border-border-soft px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-stone-500 hover:text-white"
          >
            House clearance in Falkirk
          </a>

        </div>


        <ServiceSectionGallery
          images={[
            {
              src: "/images/web/service_domestic_1.webp",
              alt: "Domestic house clearance — kitchen area",
            },
            {
              src: "/images/web/service_domestic_2.webp",
              alt: "Domestic house clearance — living space",
            },
            {
              src: "/images/web/service_domestic_03.webp",
              alt: "Domestic house clearance — bedroom or storage area",
            },
            {
              src: "/images/web/service_domestic_04.webp",
              alt: "Domestic house clearance — cleared interior",
            },
          ]}
        />

      </div>

    </section>
  )
}
