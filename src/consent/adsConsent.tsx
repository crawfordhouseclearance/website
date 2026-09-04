import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type AdsConsentState = "undecided" | "accepted" | "rejected"

const ADS_ID = "AW-18178004943"
const COOKIE_NAME = "chc_ads_consent"
const ACCEPTED_COOKIE_VALUE = "v1:accepted"
const REJECTED_COOKIE_VALUE = "v1:rejected"
const COOKIE_MAX_AGE_SECONDS = 15_552_000

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
  }
}

let adsScriptPromise: Promise<boolean> | undefined
let adsConfigured = false
let adsInitialised = false
let adsConsentGranted = false

function getStoredConsent(): AdsConsentState {
  if (typeof document === "undefined") return "undecided"

  const value = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1)

  if (value === ACCEPTED_COOKIE_VALUE) return "accepted"
  if (value === REJECTED_COOKIE_VALUE) return "rejected"
  return "undecided"
}

// eslint-disable-next-line react-refresh/only-export-components
export function hasAcceptedAdsConsent() {
  return getStoredConsent() === "accepted"
}

function storeConsent(state: Exclude<AdsConsentState, "undecided">) {
  const value = state === "accepted" ? ACCEPTED_COOKIE_VALUE : REJECTED_COOKIE_VALUE
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; SameSite=Lax; Secure; Max-Age=${COOKIE_MAX_AGE_SECONDS}`
}

function getGtag(): Gtag {
  window.dataLayer = window.dataLayer ?? []
  window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args))
  return window.gtag
}

function loadAdsScript(): Promise<boolean> {
  if (adsScriptPromise) return adsScriptPromise

  const existing = document.querySelector<HTMLScriptElement>(
    `script[data-chc-google-ads="${ADS_ID}"]`,
  )

  adsScriptPromise = new Promise((resolve) => {
    const script = existing ?? document.createElement("script")
    const complete = () => {
      script.dataset.chcLoaded = "true"
      resolve(true)
    }
    const failed = () => resolve(false)

    if (!existing) {
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`
      script.dataset.chcGoogleAds = ADS_ID
      script.addEventListener("load", complete, { once: true })
      script.addEventListener("error", failed, { once: true })
      document.head.appendChild(script)
      return
    }

    if (script.dataset.chcLoaded === "true") {
      complete()
      return
    }

    script.addEventListener("load", complete, { once: true })
    script.addEventListener("error", failed, { once: true })
  })

  return adsScriptPromise
}

/** Starts BASIC Consent Mode only after the visitor has accepted optional Ads cookies. */
// eslint-disable-next-line react-refresh/only-export-components
export function ensureAdsMeasurement(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false)

  const gtag = getGtag()

  if (!adsInitialised) {
    adsInitialised = true
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    })
  }

  if (!adsConsentGranted) {
    adsConsentGranted = true
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "denied",
      analytics_storage: "denied",
    })
  }

  const script = loadAdsScript()
  if (!adsConfigured) {
    adsConfigured = true
    gtag("config", ADS_ID)
  }

  return script
}

function denyAdsMeasurement() {
  if (!adsInitialised || !window.gtag) return

  adsConsentGranted = false

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  })
}

type AdsConsentContextValue = {
  consent: AdsConsentState
  accept: () => void
  reject: () => void
}

const AdsConsentContext = createContext<AdsConsentContextValue | null>(null)

export function AdsConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<AdsConsentState>("undecided")

  useEffect(() => {
    const storedConsent = getStoredConsent()
    if (storedConsent === "undecided") return

    const timeout = window.setTimeout(() => setConsent(storedConsent), 0)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (consent === "accepted") void ensureAdsMeasurement()
  }, [consent])

  const accept = useCallback(() => {
    storeConsent("accepted")
    setConsent("accepted")
    void ensureAdsMeasurement()
  }, [])

  const reject = useCallback(() => {
    storeConsent("rejected")
    setConsent("rejected")
    denyAdsMeasurement()
  }, [])

  const value = useMemo(() => ({ consent, accept, reject }), [consent, accept, reject])

  return <AdsConsentContext.Provider value={value}>{children}</AdsConsentContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAdsConsent() {
  const context = useContext(AdsConsentContext)
  if (!context) throw new Error("useAdsConsent must be used within AdsConsentProvider")
  return context
}
