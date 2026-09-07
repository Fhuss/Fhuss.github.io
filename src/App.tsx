import React from 'react'
import { useAtom } from 'jotai'
import { stepAtom } from './atoms'
import { QUESTIONNAIRE } from './questions'
import { SuccessScreen } from './components/SuccessScreen'
import { Questionnaire } from './components/Questionnaire'

export default function App() {
  const [step] = useAtom(stepAtom)
  const isAccepted = step > QUESTIONNAIRE.length

  if (isAccepted) {
    return <SuccessScreen />
  }

  return <Questionnaire />
}
