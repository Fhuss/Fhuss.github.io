import React from "react"

export function ProgressDots({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-center gap-3 mb-12">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i <= currentStep ? "bg-rose-500" : "bg-rose-200"
          }`}
        />
      ))}
    </div>
  )
}
