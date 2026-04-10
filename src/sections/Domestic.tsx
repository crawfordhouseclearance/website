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
            You get a fixed scope and price before we start, and the place swept
            through so it is ready for sale, rent, or your next step—not half-done
            corners or bags left behind.
          </p>

        </div>


        <ServiceSectionGallery
          images={[
            "/images/web/service_domestic_1.webp",
            "/images/web/service_domestic_2.webp",
            "/images/web/service_domestic_03.webp",
            "/images/web/service_domestic_04.webp",
          ]}
        />

      </div>

    </section>
  )
}
