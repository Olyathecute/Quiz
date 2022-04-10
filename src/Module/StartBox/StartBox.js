import React, { useState } from 'react'
import './StartBox.scss'
import Button from '../../components/Button/Button'
import RadioButtonsStart from '../../components/RadioButtonsStart/RadioButtonsStart'

export default function StartBox({ quizzes, setRunningQuiz }) {
  const [selectedQuiz, setSelectedQuiz] = useState()

  const startQuiz = () => setRunningQuiz(selectedQuiz)

  return (
    <div className="start-box">
      <h2>Choose your Quiz</h2>
      <div className="quizzes">
        <RadioButtonsStart quizzes={quizzes} setSelectedQuiz={setSelectedQuiz} />
      </div>
      <div className="btn">
        <Button name={'Start'} onClick={startQuiz} isDisabled={!selectedQuiz} />
      </div>
    </div>
  )
}
