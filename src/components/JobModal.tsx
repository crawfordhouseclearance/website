import { useLayoutEffect, useRef } from "react"

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
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const backdrop = backdropRef.current
    const panel = panelRef.current
    const gallery = galleryRef.current
    if (!backdrop || !panel) return

    const vw = window.innerWidth
    const vh = window.innerHeight
    const rect = panel.getBoundingClientRect()
    const hOverflow = panel.scrollWidth > panel.clientWidth
    const galleryH = gallery?.offsetHeight ?? 0
    const textBlockH = Math.max(0, panel.scrollHeight - galleryH - 48)

    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "68037d" },
      body: JSON.stringify({
        sessionId: "68037d",
        runId: "pre-fix",
        hypothesisId: "H1",
        location: "JobModal.tsx:layout",
        message: "backdrop vs viewport (flex center scroll)",
        data: {
          vw,
          vh,
          backdropScrollH: backdrop.scrollHeight,
          backdropClientH: backdrop.clientHeight,
          scrollExtraVsVh: backdrop.scrollHeight - vh,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "68037d" },
      body: JSON.stringify({
        sessionId: "68037d",
        runId: "pre-fix",
        hypothesisId: "H2",
        location: "JobModal.tsx:layout",
        message: "panel rect margins",
        data: {
          panelTop: rect.top,
          panelBottom: rect.bottom,
          marginAbovePanel: rect.top,
          marginBelowVh: vh - rect.bottom,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "68037d" },
      body: JSON.stringify({
        sessionId: "68037d",
        runId: "pre-fix",
        hypothesisId: "H3",
        location: "JobModal.tsx:layout",
        message: "panel height vs viewport",
        data: {
          panelScrollH: panel.scrollHeight,
          exceedsVh: panel.scrollHeight > vh,
          vh,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "68037d" },
      body: JSON.stringify({
        sessionId: "68037d",
        runId: "pre-fix",
        hypothesisId: "H4",
        location: "JobModal.tsx:layout",
        message: "gallery vs text vertical share",
        data: {
          galleryH,
          approxTextH: textBlockH,
          galleryShare: panel.scrollHeight > 0 ? galleryH / panel.scrollHeight : 0,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "68037d" },
      body: JSON.stringify({
        sessionId: "68037d",
        runId: "pre-fix",
        hypothesisId: "H5",
        location: "JobModal.tsx:layout",
        message: "horizontal overflow",
        data: { hOverflow, panelClientW: panel.clientWidth, panelScrollW: panel.scrollWidth },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
  }, [])

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
      role="presentation"
    >

      <div
        ref={panelRef}
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

        <div
          ref={galleryRef}
          className="mt-5 mx-auto grid max-w-[440px] grid-cols-2 gap-3"
        >
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
