function Footer() {
  return (
    <footer className="bg-[var(--color-chrome)] section-divider mt-24 py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo */}

        <img
          src="/images/logo-white.svg"
          alt="Crawford House Clearance logo"
          className="h-10 mx-auto mb-6 opacity-80"
        />

        <h3 className="text-text-main font-semibold mb-4">
          Crawford House Clearance
        </h3>

        <p className="text-text-muted mb-8">
          Probate, domestic and commercial clearances across Central
          Scotland.
        </p>


        {/* Footer Grid */}

        <div className="grid md:grid-cols-3 gap-10 text-sm text-text-muted">

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
              Email: gary@crawfordhouseclearance.co.uk
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

        <div className="mt-12 pt-6 border-t border-border-soft text-xs text-stone-500">
          © {new Date().getFullYear()} Crawford House Clearance
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <a
            href="/privacy"
            className="text-stone-500 hover:text-stone-400 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer