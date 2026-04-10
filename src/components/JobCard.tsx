import { useState } from "react"
import JobModal, { type JobModalImage } from "./JobModal"

type JobCardProps = {
  location: string
  jobType: string
  category?: string
  context?: string
  description?: string
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
  previews,
  modalImages,
}: JobCardProps) {

  const [open, setOpen] = useState(false)
  const [previewBefore, previewAfter] = previews

  return (
    <>
      <div
        className="card-surface overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
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

        <div className="p-6 flex flex-col h-full gap-4">

          {category && (
            <div>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs tracking-widest uppercase text-text-muted border border-border-soft bg-white/5">
                {category}
              </span>
            </div>
          )}

          <div className="space-y-1">
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
            <p className="text-text-muted text-sm leading-relaxed">
              {description}
            </p>
          )}

          <div className="grid grid-cols-2 gap-3">
            <img src={previewBefore} alt="" className="rounded-lg w-full h-auto object-cover" />
            <img src={previewAfter} alt="" className="rounded-lg w-full h-auto object-cover" />
          </div>

          <span
            className="bg-cta text-brand-deep px-4 py-2 rounded-lg text-sm font-semibold self-start hover:bg-cta-hover transition pointer-events-none"
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
          images={modalImages}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
