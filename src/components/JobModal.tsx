export default function JobModal({
  location,
  jobType,
  description,
  before,
  after,
  onClose,
}: any) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <div
        className="card-surface max-w-2xl w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-white mb-4">
          {location} – {jobType}
        </h2>

        <p className="text-stone-400 mb-6">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-sm text-stone-400 mb-2">Before</p>
            <img src={before} className="rounded-lg" />
          </div>

          <div>
            <p className="text-sm text-stone-400 mb-2">After</p>
            <img src={after} className="rounded-lg" />
          </div>

        </div>

      </div>

    </div>
  )
}