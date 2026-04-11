export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[76vh] md:min-h-0 md:h-[60vh] flex items-start md:items-center justify-center md:justify-start texture-overlay px-6 sm:px-8 md:pl-16 lg:pl-24 md:pr-10 pt-8 pb-10 md:py-0"
    >

      {/* Background Image */}
      <img
        src="/images/web/approved-hero.webp"
        className="absolute inset-0 w-full h-full object-cover max-sm:object-[68%_50%] sm:object-[50%_50%] brightness-[0.93] saturate-[0.9]"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent" />

      {/* Hero Content */}
      <div
        className="relative w-full max-w-md mx-auto md:mx-0 md:ml-12 lg:ml-20 md:max-w-xl text-center md:text-left antialiased"
      >

        <h1 className="text-xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-md:leading-[1.06] md:leading-tight drop-shadow-sm">
          Probate, Domestic & Commercial Clearances
        </h1>

        <p className="mt-2 md:mt-5 text-text-main text-sm md:text-lg max-md:leading-[1.35] md:leading-relaxed drop-shadow-sm">
          Across Falkirk, Stirling and Central Scotland, with clear pricing agreed upfront.
        </p>

        <div className="mt-2.5 md:mt-7 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-cta text-brand-deep px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base shadow-xl shadow-black/50 ring-2 ring-white/35 hover:bg-cta-hover hover:shadow-2xl hover:shadow-black/60 hover:ring-white/50 transition-[background-color,box-shadow,ring-color,ring-opacity] duration-200"
          >
            Get a Quote
          </a>
        </div>

        <ul className="mt-2.5 md:mt-8 flex flex-wrap justify-center md:justify-start gap-x-2.5 md:gap-x-5 gap-y-0.5 md:gap-y-2 text-[0.7rem] md:text-sm text-white/75 max-md:leading-[1.25] list-none px-0">
          <li>✓ Fully Insured</li>
          <li>✓ SEPA Registered Waste Carrier</li>
          <li>✓ Waste Transfer Notes Provided</li>
          <li>✓ Local & Reliable</li>
        </ul>

      </div>

    </section>
  )
}
