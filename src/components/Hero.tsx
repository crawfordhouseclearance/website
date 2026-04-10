export default function Hero() {
  return (
    <section className="relative h-[62vh] md:h-[60vh] flex items-center justify-center md:justify-start texture-overlay px-6 sm:px-8 md:pl-16 lg:pl-24 md:pr-10">

      {/* Background Image */}
      <img
        src="/images/hero.png"
        className="absolute inset-0 w-full h-full object-cover object-[58%_50%] sm:object-[50%_50%] brightness-[0.93] saturate-[0.9]"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent" />

      {/* Hero Content */}
      <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-12 lg:ml-20 md:max-w-xl text-center md:text-left antialiased">

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-sm">
          Probate, Domestic & Commercial Clearances
        </h1>

        <p className="mt-5 text-text-main text-lg leading-relaxed drop-shadow-sm">
          Across Falkirk, Stirling and Central Scotland, with clear pricing agreed upfront.
        </p>

        <div className="mt-7 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-cta text-brand-deep px-6 py-3 rounded-lg font-medium shadow-xl shadow-black/50 ring-2 ring-white/35 hover:bg-cta-hover hover:shadow-2xl hover:shadow-black/60 hover:ring-white/50 transition-[background-color,box-shadow,ring-color,ring-opacity] duration-200"
          >
            Get a Quote
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-white/75 list-none px-0">
          <li>✓ Fully Insured</li>
          <li>✓ SEPA Registered Waste Carrier</li>
          <li>✓ Waste Transfer Notes Provided</li>
          <li>✓ Local & Reliable</li>
        </ul>

      </div>

    </section>
  )
}