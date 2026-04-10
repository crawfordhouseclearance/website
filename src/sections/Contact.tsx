import { useRef, useState, type FormEvent } from "react"

/** Same-origin `/api/contact` on Vercel; override with VITE_CONTACT_API_URL for unusual setups */
const CONTACT_API =
  (import.meta.env.VITE_CONTACT_API_URL ?? "") + "/api/contact"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )
  const [errorMessage, setErrorMessage] = useState("")
  const submitInFlight = useRef(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitInFlight.current) return

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      propertyLocation: String(fd.get("propertyLocation") ?? "").trim(),
      details: String(fd.get("details") ?? "").trim(),
    }

    if (!payload.name || !payload.email || !payload.details) {
      setErrorMessage("Please fill in all required fields.")
      setStatus("error")
      return
    }

    submitInFlight.current = true
    setStatus("loading")
    setErrorMessage("")

    try {
      const r = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = (await r.json().catch(() => ({}))) as { error?: string }

      if (!r.ok) {
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again or call us.",
        )
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setErrorMessage(
        "Could not send your message. Please try again or call us.",
      )
      setStatus("error")
    } finally {
      submitInFlight.current = false
    }
  }

  return (
    <section id="contact" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-semibold text-white mb-6">
            Contact
          </h2>

          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            Send a quick message with the property location and the type of clearance
            needed. If you have photos, include those too, and we’ll come back with a
            clear quote.
          </p>

        </div>


        {/* Contact Buttons */}

        <div className="flex flex-wrap justify-center gap-3 mb-16">

          <a
            href="tel:07459420152"
            className="inline-block text-center bg-cta text-brand-deep px-8 py-4 rounded-lg font-semibold hover:bg-cta-hover transition"
          >
            Call 07459 420152
          </a>

          <a
            href="https://wa.me/447459420152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-soft px-6 py-3.5 text-sm font-medium text-text-muted hover:text-text-main hover:border-stone-500 transition-colors"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Send Photos on WhatsApp
          </a>

        </div>

        {/* Contact Form */}

        {status === "success" ? (
          <div
            className="max-w-2xl mx-auto rounded-lg border border-border-soft bg-input-surface/40 px-6 py-8 text-center"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-semibold text-white mb-2">
              Message sent
            </p>
            <p className="text-text-muted leading-relaxed">
              Thank you. We have received your enquiry and will get back to you as
              soon as possible. A confirmation has also been sent to your email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl mx-auto"
            aria-busy={status === "loading"}
          >

            <div>
              <label className="block text-sm text-text-muted mb-2" htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                disabled={status === "loading"}
                className="w-full bg-input-surface border border-[color:var(--color-input-border)] rounded-lg px-4 py-3 text-white shadow-inner disabled:opacity-60"
              />
            </div>


            <div>
              <label className="block text-sm text-text-muted mb-2" htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                disabled={status === "loading"}
                className="w-full bg-input-surface border border-[color:var(--color-input-border)] rounded-lg px-4 py-3 text-white shadow-inner disabled:opacity-60"
              />
            </div>


            <div>
              <label className="block text-sm text-text-muted mb-2" htmlFor="contact-location">
                Property Location
              </label>

              <input
                id="contact-location"
                type="text"
                name="propertyLocation"
                autoComplete="street-address"
                disabled={status === "loading"}
                className="w-full bg-input-surface border border-[color:var(--color-input-border)] rounded-lg px-4 py-3 text-white shadow-inner disabled:opacity-60"
              />
            </div>


            <div>
              <label className="block text-sm text-text-muted mb-2" htmlFor="contact-details">
                Details
              </label>

              <textarea
                id="contact-details"
                name="details"
                rows={5}
                required
                disabled={status === "loading"}
                className="w-full bg-input-surface border border-[color:var(--color-input-border)] rounded-lg px-4 py-3 text-white shadow-inner disabled:opacity-60"
              ></textarea>
            </div>

            {status === "error" && errorMessage ? (
              <p className="text-sm text-red-400" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-cta text-brand-deep py-4 rounded-lg font-semibold hover:bg-cta-hover transition disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "loading" ? "Sending…" : "Get a Quote"}
            </button>

          </form>
        )}

      </div>

    </section>
  )
}
