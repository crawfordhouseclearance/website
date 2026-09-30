# Project notes

Historical implementation log. For current coding-agent operating rules, see
[AGENTS.md](AGENTS.md) — that file is authoritative, not this one.

## Service section image gallery (standardized layout)

- **Task:** Standardize service section image gallery layout
- **Commit:** `36efa2c`
- **Files:**
  - `src/components/ServiceSectionGallery.tsx`
  - `src/sections/Probate.tsx`
  - `src/sections/Domestic.tsx`
  - `src/sections/Commercial.tsx`
- **Backup branch:** `backup/20260411-000331-website-services-gallery` — a
  per-task timestamped backup branch, created under an older, more manual
  workflow. This is no longer the practice; see AGENTS.md.

## PostHog analytics (30 September 2026)

- PostHog EU project `Crawford House Clearance Website` is the behavioural analytics workspace.
- PostHog only starts after the existing optional-cookie consent is accepted; rejection stops/opts out PostHog capture.
- Production-only browser capture is restricted to the Crawford House Clearance domain. IP addresses are anonymised in PostHog project settings.
- Session replay and heatmaps are enabled; replay masks all form inputs and no visitor name/email identification is performed.
- Explicit lead events: `quote_cta_clicked`, `quote_form_started`, `quote_form_submitted`, `phone_clicked`, and `whatsapp_clicked`.
- PostHog is loaded lazily so visitors who do not consent do not download the analytics SDK.
