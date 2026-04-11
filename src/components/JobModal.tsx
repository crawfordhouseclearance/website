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
        className="card-surface relative my-4 w-full min-w-0 max-w-3xl max-md:max-h-[calc(100dvh-1.75rem)] max-md:overflow-y-auto max-md:overscroll-contain p-4 md:my-8 md:max-h-none md:overflow-visible md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
      >

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-xl text-stone-400 hover:text-white md:right-4 md:top-4"
          aria-label="Close"
        >
          ✕
        </button>

        <h2
          id="job-modal-title"
          className="mb-1 pr-9 text-xl font-semibold text-white max-md:min-h-[3.75rem] max-md:leading-snug md:mb-2 md:min-h-0 md:pr-10 md:text-2xl"
        >
          {jobType} – {location}
        </h2>

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
