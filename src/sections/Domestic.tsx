export default function Domestic() {
  return (
    <section id="domestic" className="section-surface py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Domestic House Clearance
          </h2>

          <p className="text-stone-400 mb-6 leading-relaxed">
            Full and partial house clearances for homeowners, landlords
            and tenants across Glasgow, Falkirk and Stirling.
          </p>

          <p className="text-stone-400 leading-relaxed">
            Clearances are carried out efficiently and respectfully, with
            pricing agreed in advance. The property is left clear.
          </p>

        </div>


        <img
          src="/images/domestic1.jpg"
          alt="Domestic house clearance"
          className="rounded-xl shadow-lg"
        />

      </div>

    </section>
  )
}