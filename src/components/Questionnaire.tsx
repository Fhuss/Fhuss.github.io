import React, { useRef, useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { stepAtom } from '../atoms'
import { QUESTIONNAIRE, VALENTINE_QUESTION } from '../questions'
import { isTextAnswerCorrect } from '../utils/answer'
import { CorrectOverlay } from './CorrectOverlay'
import { ProgressDots } from './ProgressDots'
import { QuestionCard } from './QuestionCard'
import { TextQuestion } from './TextQuestion'
import { ChoiceQuestion } from './ChoiceQuestion'

const TOTAL_STEPS = QUESTIONNAIRE.length + 1

export function Questionnaire() {
  const [step, setStep] = useAtom(stepAtom)
  const [wrongMessage, setWrongMessage] = useState("")
  const [showCorrect, setShowCorrect] = useState(false)
  const textInputRef = useRef<"string"| null>(null)

  const isAccepted = step > QUESTIONNAIRE.length
  const isValentineStep = step === QUESTIONNAIRE.length
  const currentQuestion = step < QUESTIONNAIRE.length ? QUESTIONNAIRE[step] : VALENTINE_QUESTION

  useEffect(() => {
    if (!showCorrect) return
    const timer = setTimeout(() => {
      setShowCorrect(false)
      setStep((s) => s + 1)
    }, 800)
    return () => clearTimeout(timer)
  }, [showCorrect, setStep])

  const handleTextSubmit = (e) => {
    e.preventDefault()
    setWrongMessage("")
    const value = (textInputRef.current as unknown as HTMLInputElement)?.value ?? ""
    if (isTextAnswerCorrect(
      typeof value === "string" ? value : "",
      currentQuestion.correctAnswer
    )) {
      if (textInputRef.current && typeof textInputRef.current === "object" && "value" in textInputRef.current) {
        (textInputRef.current as HTMLInputElement).value = ""
      }
      setShowCorrect(true)
    } else {
      setWrongMessage("Not quite, try again!")
    }
  }

  const handleChoiceClick = (optionIndex) => {
    setWrongMessage("")
    const correctIndex = currentQuestion.correctAnswer
    const isCorrect = correctIndex === -1 || correctIndex === optionIndex
    if (isCorrect) {
      if (isValentineStep) {
        setStep((s) => s + 1)
      } else {
        setShowCorrect(true)
      }
    } else {
      setWrongMessage("Not quite, try again!")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-rose-100 via-pink-50 to-rose-200  items-center justify-center p-10 md:p-14 relative">
      <h1 className="text-4xl font-bold text-rose-900 mb-8">Valentine's Day Quiz for Fede</h1>
      <CorrectOverlay show={showCorrect} />

      <div className="max-w-lg w-full text-center flex flex-col">
        <ProgressDots currentStep={step} totalSteps={TOTAL_STEPS} />
        <QuestionCard
          question={currentQuestion.question}
          wrongMessage={wrongMessage}
        >
          {currentQuestion.type === "text" && (
            <TextQuestion inputRef={textInputRef} onSubmit={handleTextSubmit} />
          )}
          {currentQuestion.type === "choice" && (
            <ChoiceQuestion options={currentQuestion.options} onSelect={handleChoiceClick} />
          )}
        </QuestionCard>

        {!isAccepted && isValentineStep && (
          <p className="text-rose-400 text-4xl animate-pulse mt-8">♥ ♥ ♥</p>
        )}
      </div>
    </div>
  )
}
