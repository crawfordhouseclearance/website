export type JobModalImage = {
  src: string
  alt: string
}

type JobModalProps = {
  location: string
  jobType: string
  context?: string
  description?: string
  images: readonly JobModalImage[]
  onClose: () => void
}

export default function JobModal({
  location,
  jobType,
  context,
  description,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="rounded-lg w-full h-auto object-cover"
            />
          ))}
        </div>

      </div>

    </div>
  )
}
