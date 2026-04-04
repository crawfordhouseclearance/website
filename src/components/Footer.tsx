function Footer() {
  return (
    <footer className="section-divider mt-24 py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo */}

        <img
          src="/images/logo.svg"
          alt="Crawford House Clearance logo"
          className="h-10 mx-auto mb-6 opacity-80"
        />

        <h3 className="text-white font-semibold mb-4">
          Crawford House Clearance
        </h3>

        <p className="text-stone-400 mb-8">
          Probate, domestic and commercial clearances across Central
          Scotland.
        </p>


        {/* Footer Grid */}

        <div className="grid md:grid-cols-3 gap-10 text-sm text-stone-400">

          <div>

            <p className="mb-2">
              Phone: 07459 420152
            </p>

            <p>
              WhatsApp for photo estimates
            </p>

          </div>

          <div>

            <p className="mb-2">
              Email: admin@crawfordclearance
            </p>

            <p>
              Central Scotland
            </p>

          </div>

          <div>

            <p className="mb-2">
              SEPA Registered Waste Carrier
            </p>

            <p>
              WCR/R/3023449
            </p>

          </div>

        </div>


        {/* Copyright */}

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-stone-500">
          © {new Date().getFullYear()} Crawford House Clearance
        </div>

      </div>

    </footer>
  )
}

export default Footer