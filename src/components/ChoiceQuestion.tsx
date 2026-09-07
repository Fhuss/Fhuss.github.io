import React from "react";

export function ChoiceQuestion({ options, onSelect }) {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="px-8 py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium transition-all"
        >
          {option}
        </button>
      ))}
    </div>
  )
}
