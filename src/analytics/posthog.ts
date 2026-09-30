type PostHogClient = (typeof import("posthog-js"))["default"]

const POSTHOG_TOKEN = "phc_m0oQNs7i5oTnuIlggVDeU9dXSdB5wvlEeumjHXuXuQI"
const POSTHOG_HOST = "https://eu.i.posthog.com"
const POSTHOG_HOSTNAMES = new Set([
  "www.crawfordhouseclearance.co.uk",
  "crawfordhouseclearance.co.uk",
])

let client: PostHogClient | undefined
let clientPromise: Promise<PostHogClient> | undefined
let initialised = false

async function getPostHog() {
  if (client) return client
  clientPromise ??= import("posthog-js").then((module) => module.default)
  client = await clientPromise
  return client
}

export async function ensurePostHogMeasurement() {
  if (typeof window === "undefined" || !POSTHOG_HOSTNAMES.has(window.location.hostname)) return

  const posthog = await getPostHog()

  if (!initialised) {
    posthog.init(POSTHOG_TOKEN, {
      api_host: POSTHOG_HOST,
      ui_host: "https://eu.posthog.com",
      defaults: "2026-05-30",
      person_profiles: "identified_only",
      capture_pageview: "history_change",
      capture_pageleave: true,
      session_recording: {
        maskAllInputs: true,
      },
    })
    initialised = true
    return
  }

  if (posthog.has_opted_out_capturing()) {
    posthog.opt_in_capturing()
  }
  posthog.startSessionRecording()
}

export function denyPostHogMeasurement() {
  if (typeof window === "undefined" || !initialised || !client) return

  client.stopSessionRecording()
  client.opt_out_capturing()
}

export function capturePostHog(
  event: string,
  properties?: Record<string, string | number | boolean>,
) {
  if (!initialised || !client) return
  client.capture(event, properties)
}
