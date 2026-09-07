import React from "react"

export function TextQuestion({ inputRef, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder="use format YYYY-mm-dd"
        className="px-5 py-4 rounded-xl border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none"
      />
      <button
        type="submit"
        className="px-8 py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium transition-all"
      >
        Check
      </button>
    </form>
  )
}
