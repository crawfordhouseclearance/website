export default function Header() {
  return (
    <header className="site-surface sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo + Title */}

        <a href="#" className="flex items-center gap-4">

          <img
            src="/images/logo-white.svg"
            alt="Crawford House Clearance logo"
            className="h-12 w-auto relative top-[1px] opacity-90 hover:opacity-100 transition"
          />

          <div className="text-sm md:text-base font-semibold tracking-widest text-stone-200">
            CRAWFORD HOUSE CLEARANCE
          </div>

        </a>


        {/* Navigation */}

        <nav className="hidden md:flex gap-8 text-sm text-stone-400">

          <a href="#probate" className="hover:text-white transition-colors">
            Probate
          </a>

          <a href="#domestic" className="hover:text-white transition-colors">
            Domestic
          </a>

          <a href="#commercial" className="hover:text-white transition-colors">
            Commercial
          </a>

          <a href="#jobs" className="hover:text-white transition-colors">
            Jobs
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>

        </nav>

      </div>

    </header>
  )
}