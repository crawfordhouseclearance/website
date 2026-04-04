import { useState } from "react"
import JobModal from "./JobModal"

export type JobCardDetails = {
  additionalDescription?: string
  beforeNote?: string
  afterNote?: string
  extraImages?: Array<{
    src: string
    alt?: string
  }>
}

type JobCardProps = {
  location: string
  jobType: string
  category?: string
  context?: string
  description?: string
  before: string
  after: string
  details?: JobCardDetails
}

export default function JobCard({
  location,
  jobType,
  category,
  context,
  description,
  before,
  after,
  details,
}: JobCardProps) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-surface overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

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
              <p className="text-text-muted text-sm">
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
            <img src={before} className="rounded-lg" />
            <img src={after} className="rounded-lg" />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-cta text-brand-deep px-4 py-2 rounded-lg text-sm font-semibold self-start hover:bg-cta-hover transition"
          >
            View Details
          </button>

        </div>

      </div>

      {open && (
        <JobModal
          location={location}
          jobType={jobType}
          description={description}
          before={before}
          after={after}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}