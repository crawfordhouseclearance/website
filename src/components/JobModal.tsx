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
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
      role="presentation"
    >

      <div
        className="card-surface max-w-3xl w-full p-6 md:p-8 relative my-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-modal-title"
      >

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 id="job-modal-title" className="text-2xl font-semibold text-white mb-2 pr-10">
          {jobType} – {location}
        </h2>

        {context && (
          <p className="text-stone-300 text-sm leading-relaxed mb-4 whitespace-pre-line">
            {context}
          </p>
        )}

        {description ? (
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            {description}
          </p>
        ) : null}

        {details ? (
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            {details}
          </p>
        ) : null}

        <div className="mt-5 mx-auto grid max-w-[440px] grid-cols-2 gap-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-lg aspect-[4/5]"
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
