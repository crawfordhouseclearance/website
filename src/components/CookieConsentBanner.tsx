import { Link } from "react-router-dom"
import { useAdsConsent } from "../consent/adsConsent"

type CookieConsentBannerProps = {
  open: boolean
  onChoice: () => void
  showWhenUndecided: boolean
}

export default function CookieConsentBanner({ open, onChoice, showWhenUndecided }: CookieConsentBannerProps) {
  const { consent, accept, reject } = useAdsConsent()

  if (!open && (!showWhenUndecided || consent !== "undecided")) return null

  const currentState = consent === "accepted" ? "Optional cookies are accepted." :
    consent === "rejected" ? "Optional cookies are rejected." : null

  function handleAccept() {
    accept()
    onChoice()
  }

  function handleReject() {
    reject()
    onChoice()
  }

  return (
    <aside
      aria-label="Cookie settings"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-lg border border-border-soft bg-[var(--color-chrome)] p-4 shadow-2xl sm:p-6">
        <h2 className="text-lg font-semibold text-white">Optional cookies</h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          We use optional Google Ads measurement to understand whether our advertising leads to enquiries. You can accept or reject it. {" "}
          <Link to="/privacy" className="text-text-main underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
        </p>
        {currentState ? <p className="mt-3 text-sm text-text-main" role="status">{currentState}</p> : null}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-lg border border-cta bg-cta px-2 py-2.5 text-sm font-semibold leading-snug text-brand-deep transition hover:bg-cta-hover"
          >
            Accept optional cookies
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="rounded-lg border border-cta px-2 py-2.5 text-sm font-semibold leading-snug text-text-main transition hover:bg-input-surface"
          >
            Reject optional cookies
          </button>
        </div>
      </div>
    </aside>
  )
}
