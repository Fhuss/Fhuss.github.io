import React from "react"

export function QuestionCard({ question, children, wrongMessage }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8! border border-rose-100 flex flex-col gap-md">
      <h2 className="text-xl text-rose-900 font-medium leading-relaxed mb-10">
        {question}
      </h2>
      {children}
      {wrongMessage && <p className="mt-6 text-rose-600 text-sm">{wrongMessage}</p>}
    </div>
  )
}
