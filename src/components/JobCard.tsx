import { useState } from "react"
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
  /** Alt text for preview thumbnails (before, after) */
  previewAlts: readonly [string, string]
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
  previewAlts,
  modalImages,
}: JobCardProps) {

  const [open, setOpen] = useState(false)
  const [previewBefore, previewAfter] = previews
  const [previewBeforeAlt, previewAfterAlt] = previewAlts

  return (
    <>
      <div
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

          <div className="space-y-1 shrink-0">
            <h3 className="text-lg font-semibold text-white">
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
            <img src={previewBefore} alt={previewBeforeAlt} className="rounded-lg w-full aspect-[4/3] object-cover" />
            <img src={previewAfter} alt={previewAfterAlt} className="rounded-lg w-full aspect-[4/3] object-cover" />
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
