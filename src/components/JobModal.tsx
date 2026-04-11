export type JobModalImage = {
  src: string
  alt: string
}

type JobModalProps = {
  location: string
  jobType: string
  context?: string
  description?: string
  details?: string
  images: readonly JobModalImage[]
  onClose: () => void
}

export default function JobModal({
  location,
  jobType,
  context,
  description,
  details,
  images,
  onClose,
}: JobModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/70 p-3 max-md:items-start max-md:pt-[max(0.75rem,env(safe-area-inset-top))] max-md:pb-[max(0.75rem,env(safe-area-inset-bottom))] md:items-center md:p-4"
      onClick={onClose}
      role="presentation"
    >

      <div
        className="card-surface relative my-4 w-full min-w-0 max-w-3xl max-md:max-h-[calc(100dvh-1.75rem)] max-md:overflow-y-auto max-md:overscroll-contain px-4 pb-4 pt-3 md:my-8 md:max-h-none md:overflow-visible md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
      >

        <div className="mb-1 flex flex-row-reverse items-start gap-2 md:mb-2 md:gap-3">
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded p-1 text-xl leading-none text-stone-400 hover:text-white md:p-1.5"
            aria-label="Close"
          >
            ✕
          </button>
          <h2
            id="job-modal-title"
            className="min-w-0 flex-1 text-xl font-semibold leading-tight text-white md:text-2xl md:leading-tight"
          >
            {jobType} – {location}
          </h2>
        </div>

        {context && (
          <p className="mb-3 text-sm leading-relaxed text-stone-300 whitespace-pre-line md:mb-4">
            {context}
          </p>
        )}

        {description ? (
          <p className="mb-4 text-sm leading-relaxed text-stone-400 max-md:mb-4 md:mb-6">
            {description}
          </p>
        ) : null}

        {details ? (
          <p className="mb-4 text-sm leading-relaxed text-stone-400 max-md:mb-4 md:mb-6">
            {details}
          </p>
        ) : null}

        <div
          className="mx-auto mt-3 grid max-w-[min(100%,240px)] grid-cols-2 gap-2 md:mt-5 md:max-w-[440px] md:gap-3"
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
