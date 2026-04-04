export default function Hero() {
  return (
    <section className="relative h-[62vh] md:h-[60vh] flex items-center justify-center text-center texture-overlay">

      {/* Background Image */}
      <img
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative max-w-3xl px-6 antialiased">

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-sm">
          Probate, Domestic <br />
          & Commercial Clearance
        </h1>

        <p className="mt-5 text-text-main text-lg leading-relaxed drop-shadow-sm">
          Fully insured clearances across Glasgow, Falkirk and Stirling.
          Clear pricing agreed in advance. Work carried out respectfully.
        </p>

        <a
          href="#contact"
          className="inline-block mt-7 bg-cta text-brand-deep px-6 py-3 rounded-lg font-medium shadow-xl shadow-black/50 ring-2 ring-white/35 hover:bg-cta-hover hover:shadow-2xl hover:shadow-black/60 hover:ring-white/50 transition-[background-color,box-shadow,ring-color,ring-opacity] duration-200"
        >
          Request a Quote
        </a>

      </div>

    </section>
  )
}