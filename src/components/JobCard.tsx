import { useState, useRef, useLayoutEffect } from "react"
import JobModal, { type JobModalImage } from "./JobModal"

type JobCardProps = {
  location: string
  jobType: string
  category?: string
  context?: string
  description?: string
  /** Extended copy shown only in the modal */
  details?: string
  /** Two preview thumbnails on the card */
  previews: readonly [string, string]
  /** Full-size images for the modal (same job only) */
  modalImages: readonly JobModalImage[]
}

export default function JobCard({
  location,
  jobType,
  category,
  context,
  description,
  details,
  previews,
  modalImages,
}: JobCardProps) {

  const [open, setOpen] = useState(false)
  const [previewBefore, previewAfter] = previews
  const cardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleContextStackRef = useRef<HTMLDivElement>(null)

  // #region agent log
  useLayoutEffect(() => {
    const card = cardRef.current
    const titleEl = titleRef.current
    const stackEl = titleContextStackRef.current
    const fullTitle = `${jobType} – ${location}`
    const titleWrapped =
      titleEl != null && titleEl.scrollHeight > titleEl.clientHeight + 1
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "8a380c",
      },
      body: JSON.stringify({
        sessionId: "8a380c",
        location: "JobCard.tsx:useLayoutEffect",
        message: "job card layout metrics",
        data: {
          hypothesisId: "H1-H3",
          viewportInnerWidth:
            typeof window !== "undefined" ? window.innerWidth : null,
          jobKey: `${jobType}-${location}`,
          titleCharLen: fullTitle.length,
          titleScrollH: titleEl?.scrollHeight,
          titleClientH: titleEl?.clientHeight,
          titleWrapped,
          titleContextStackH: stackEl?.scrollHeight,
          cardOffsetH: card?.offsetHeight,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
  }, [jobType, location])
  // #endregion

  return (
    <>
      <div
        ref={cardRef}
        className="card-surface overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex min-h-0 flex-1 flex-col"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setOpen(true)
          }
        }}
        role="button"
        tabIndex={0}
      >

        <div className="p-6 flex flex-col flex-1 min-h-0 gap-4">

          {category && (
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs tracking-widest uppercase text-text-muted border border-border-soft bg-white/5">
                {category}
              </span>
            </div>
          )}

          <div ref={titleContextStackRef} className="space-y-1 shrink-0">
            <h3 ref={titleRef} className="text-lg font-semibold text-white">
              {jobType} – {location}
            </h3>

            {context && (
              <p className="text-text-muted text-sm whitespace-pre-line">
                {context}
              </p>
            )}
          </div>

          {description && (
            <p className="text-text-muted text-sm leading-relaxed shrink-0">
              {description}
            </p>
          )}

          <div className="flex-1 min-h-0" aria-hidden="true" />

          <div className="grid grid-cols-2 gap-3 shrink-0">
            <img src={previewBefore} alt="" className="rounded-lg w-full aspect-[4/3] object-cover" />
            <img src={previewAfter} alt="" className="rounded-lg w-full aspect-[4/3] object-cover" />
          </div>

          <span
            className="bg-cta text-brand-deep px-4 py-2 rounded-lg text-sm font-semibold self-start hover:bg-cta-hover transition pointer-events-none shrink-0"
          >
            View Details
          </span>

        </div>

      </div>

      {open && (
        <JobModal
          location={location}
          jobType={jobType}
          context={context}
          description={description}
          details={details}
          images={modalImages}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
