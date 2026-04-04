export default function Commercial() {
  return (
    <section id="commercial" className="py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/images/commercial1.jpg"
          alt="Commercial clearance"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Commercial Clearance
          </h2>

          <p className="text-stone-400 mb-6 leading-relaxed">
            Commercial clearances for offices, shops, warehouses and
            industrial premises across Central Scotland.
          </p>

          <p className="text-stone-400 leading-relaxed">
            Furniture, fixtures and waste are cleared, with disposal in
            line with SEPA requirements. The site is left clear.
          </p>

        </div>

      </div>

    </section>
  )
}