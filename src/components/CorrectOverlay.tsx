import React from "react"

export function CorrectOverlay({ show }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className="bg-emerald-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-lg animate-bounce">
        Correct!
      </div>
    </div>
  )
}
