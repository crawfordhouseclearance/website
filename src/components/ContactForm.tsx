import { useRef, useState, type FormEvent } from "react"

/** Same-origin `/api/contact` on Vercel; override with VITE_CONTACT_API_URL for unusual setups */
const CONTACT_API =
  (import.meta.env.VITE_CONTACT_API_URL ?? "") + "/api/contact"

type ContactFormProps = {
  /**
   * Called after a successful submission. When provided, the inline success
   * confirmation is skipped so the caller can drive the next step (e.g.
   * navigation to a thank-you page).
   */
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
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

      if (onSuccess) {
        onSuccess()
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

  if (status === "success") {
    return (
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
    )
  }

  return (
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
  )
}
