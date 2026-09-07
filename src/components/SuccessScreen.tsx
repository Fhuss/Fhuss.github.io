import React from "react"

export function SuccessScreen() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-100 via-pink-50 to-rose-200 flex flex-col items-center justify-center p-10 md:p-14">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-8 animate-bounce">💕</p>
        <h1 className="text-3xl font-semibold text-rose-800 mb-4">Happy Valentine's Day Amore ! ♥</h1>
        <img
          src="/couple.png"
          alt="Us"
          className="w-full max-w-sm mx-auto rounded-2xl shadow-lg mt-8"
        />
      </div>
    </div>
  )
}
