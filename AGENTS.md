# AGENTS.md — coding-agent operating guide

This is the single, current operating guide for any coding agent working in this
repository — Claude Code, Codex, Cursor, or another competent coding agent. If any
other document (including `NOTES.md`, chat history, or a prior session's
instructions) conflicts with this file, **this file and the current state of the
repository win.**

## What this project is

Crawford House Clearance's marketing website and lead-capture flow: a
Vite + React + TypeScript static site, deployed on Vercel, with a small set of
Vercel serverless functions under `api/` (currently the contact-form email send).
Business content — service positioning, service areas, probate/domestic/commercial
clearance copy, SEO/Google Business Profile work — lives in `src/`, `public/`, and
`outreach/`, not in this file. Don't duplicate it here; read it in place.

## Stack and layout

- Build tool: Vite. Language: TypeScript + React 19. Styling: Tailwind.
- `src/pages`, `src/sections`, `src/components`, `src/layouts` — page/section/component
  structure; follow existing naming and composition patterns rather than inventing new ones.
- `src/seo` — metadata/JSON-LD helpers used across pages.
- `src/consent` — consent-mode handling for Google Ads measurement.
- `api/contact.ts` — Vercel serverless function, sends lead emails via Resend.
- `scripts/prerender.mjs` — static prerendering used by `npm run build`.
- `vercel.json` — route rewrites for static HTML pages; keep in sync if routes change.
- Routing/rewrite additions, new service pages, or SEO metadata changes should match
  the conventions already used by the existing service pages rather than introducing
  a new pattern.

## Commands

```bash
npm run dev       # local dev server (no /api routes)
npm run lint      # eslint
npm run build     # typecheck + vite build + SSR prerender pass
npm run preview   # preview the production build
npx vercel dev    # local dev including /api/contact
```

Run lint and build (at minimum) before considering a change finished. Use them
directly — an agent that can execute commands should, rather than asking Gary to
run something and paste the output back.

## Secrets and environment

- No secrets are committed to this repo. `api/contact.ts` reads `RESEND_API_KEY`
  and `RESEND_FROM_EMAIL` from the Vercel project's environment (or a local
  `.env.local` for `vercel dev`). Never hardcode API keys, tokens, or credentials
  in source, and never print secret values into commits, logs, or chat.
- Treat `outreach/` (solicitor prospect list and research notes) as business data,
  not sample data — it has its own handling rules in `outreach/README.md`. Don't
  send outreach messages; that folder documents a human-run process.
- Treat production (the live Vercel deployment, DNS, Google Ads/Analytics config,
  Google Business Profile) as real and currently serving customers. Changes that
  touch deployment config, tracking/consent behavior, or public-facing copy are not
  routine — see "When to stop and ask" below.

## How to operate

- **Inspect before editing.** Check `git status`, the current branch, and recent
  commits before making changes. Read the relevant existing code/docs rather than
  assuming.
- **No ceremony modes.** There is no PLAN/BUILD/BUGFIX mode to declare, no "HIT
  APPLY" step, no "KILL agent" signal, and no one-agent-per-task rule. Investigate,
  implement, and verify a task end-to-end as a normal engineering session.
- **Don't make Gary a relay.** If you can run a command, read a file, or check a
  result yourself, do that instead of asking him to paste terminal output or
  screenshots back to you.
- **Scope discipline.** Implement the authorised task using the existing
  architecture and conventions. Don't refactor, redesign, or "clean up" unrelated
  code, copy, or config as a side effect.
- **Preserve unrelated working-tree state.** If there are untracked or modified
  files unrelated to your task when you start, leave them alone.
- **No routine backup branches.** Don't create timestamped `backup/<timestamp>-...`
  or similar branches as a matter of course — normal git history on a real branch
  is the safety net. (The many `backup/…` and `codex/backup-…` branches already in
  this repo are historical and were created under an older, more manual workflow;
  they're not a pattern to continue. Removing old branches is a separate decision
  for Gary, not something to do automatically as part of unrelated work.)
- **Commit and push scoped, completed work** to the appropriate active branch once
  it's implemented and validated, unless explicitly told not to. Do not merge to
  `main` yourself unless asked.
- **Validate appropriately.** For UI/frontend changes, run the app and actually
  exercise the change (and nearby functionality) rather than relying on
  typecheck/lint alone to claim something works.
- **Document durable changes.** If you make an architectural or operational change
  worth remembering (a new convention, a non-obvious constraint, a workflow
  change), record it in this file or `NOTES.md` — not only in chat.

## When to stop and ask

Stop and check with Gary before proceeding on anything involving:

- Business-visible behavior changes (pricing, service claims, contact routing).
- Deployment or DNS configuration changes, or anything that could affect the live site.
- Security- or secret-relevant changes (auth, API keys, data handling).
- Cost-incurring changes (new paid services, ad spend/config, quota-affecting API use).
- Non-trivial architecture changes (new frameworks, restructuring routing/build).
- Destructive actions (deleting branches, force-push, dropping data, large deletions).
- Public-facing content changes (site copy, SEO metadata, Google Business Profile,
  ad copy) beyond what the task explicitly asked for.

Otherwise, proceed — inspecting, implementing, validating, and reporting what you did.
