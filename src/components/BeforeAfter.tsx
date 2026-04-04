import { useState } from "react"

export default function BeforeAfter({ before, after }: any) {
  const [position, setPosition] = useState(50)

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">

      <img src={after} className="w-full" />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img src={before} className="w-full" />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3"
      />

    </div>
  )
}