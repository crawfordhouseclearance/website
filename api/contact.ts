/**
 * Vercel serverless: POST /api/contact
 *
 * Env (set in Vercel project settings or .env.local for `vercel dev`):
 * - RESEND_API_KEY — required; API key from https://resend.com/api-keys
 * - RESEND_FROM_EMAIL — optional; verified sender, e.g. "Crawford House Clearance <hello@yourdomain.com>"
 *   Defaults to Resend's test sender for development only.
 *
 * Local: run `npx vercel dev` so this route is served alongside the Vite app (plain `vite` has no /api).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

const ADMIN_TO = "Gary@crawfordhouseclearance.co.uk"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Body = {
  name: string
  email: string
  propertyLocation: string
  details: string
}

function parseBody(raw: unknown): Body | null {
  if (!raw || typeof raw !== "object") return null
  const o = raw as Record<string, unknown>
  const name = typeof o.name === "string" ? o.name.trim() : ""
  const email = typeof o.email === "string" ? o.email.trim() : ""
  const details = typeof o.details === "string" ? o.details.trim() : ""
  const propertyLocation =
    typeof o.propertyLocation === "string" ? o.propertyLocation.trim() : ""
  if (!name || !email || !details) return null
  if (!EMAIL_RE.test(email)) return null
  return { name, email, propertyLocation, details }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    res.status(503).json({ error: "Email service is not configured." })
    return
  }

  const body = parseBody(req.body)
  if (!body) {
    res.status(400).json({ error: "Invalid or missing fields." })
    return
  }

  const { name, email, details } = body
  const locationLine =
    body.propertyLocation.length > 0 ? body.propertyLocation : "(not provided)"

  const resend = new Resend(apiKey)
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Crawford House Clearance <onboarding@resend.dev>"

  const timestamp = new Date().toISOString()

  const adminText = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Property location: ${locationLine}`,
    "",
    "Details:",
    details,
    "",
    `Submitted (UTC): ${timestamp}`,
  ].join("\n")

  const customerText = [
    "Thank you for contacting Crawford House Clearance.",
    "",
    "We have received your request and will respond as soon as possible.",
    "",
    "Best regards,",
    "Crawford House Clearance",
  ].join("\n")

  try {
    const [adminResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from,
        to: [ADMIN_TO],
        replyTo: email,
        subject: `Website enquiry from ${name}`,
        text: adminText,
      }),
      resend.emails.send({
        from,
        to: [email],
        subject: "We received your enquiry — Crawford House Clearance",
        text: customerText,
      }),
    ])

    if (adminResult.error || confirmResult.error) {
      console.error(adminResult.error ?? confirmResult.error)
      res.status(502).json({ error: "Failed to send email." })
      return
    }

    res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(502).json({ error: "Failed to send email." })
  }
}
