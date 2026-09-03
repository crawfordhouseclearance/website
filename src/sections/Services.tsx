export default function Services() {
  return (
    <section className="section-surface section-divider py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold text-white">
          House Clearance Services
        </h2>

        <p className="text-stone-400 mt-4 mb-16">
          Fully insured clearances across Falkirk, Stirling, Larbert,
          Grangemouth and Central Scotland.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <a
            href="/probate-house-clearance"
            className="card-surface p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl block"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Probate House Clearance
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed">
              Probate clearances handled with care, working with families,
              solicitors and estate agents where needed.
            </p>

            <span className="mt-5 inline-block text-sm font-medium text-stone-200">
              View probate clearance details →
            </span>

          </a>

          <a
            href="#domestic"
            className="card-surface p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl block"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Domestic House Clearance
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed">
              Full and partial clearances for homeowners, landlords and
              tenants, with clear pricing agreed in advance.
            </p>

          </a>

          <a
            href="/commercial-clearance"
            className="card-surface p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl block"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Commercial Clearance
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed">
              Offices, retail and industrial premises cleared, with waste
              disposed of in line with SEPA requirements.
            </p>

            <span className="mt-5 inline-block text-sm font-medium text-stone-200">
              View commercial clearance details →
            </span>

          </a>

        </div>

      </div>

    </section>
  )
}
