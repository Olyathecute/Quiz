import React, { useState } from 'react'
import './QuestionBox.scss'
import Checkbox from '../../components/Checkbox/Checkbox'
import Match from '../../components/Match/Match'
import RadioButtons from '../../components/RadioButtons/RadioButtons'
import Button from '../../components/Button/Button'
import Area from '../../components/Area/Area'

const selectQuestionComponent = type => {
  switch (type) {
    case 'match':
      return Match
    case 'chooseOne':
      return RadioButtons
    case 'chooseMany':
      return Checkbox
  }
}

export default function QuestionBox({
  question,
  userAnswer,
  setUserAnswer,
  disabledClick,
  setDisabledClick,
  goNextQuestion
}) {
  const QuestionComponent = selectQuestionComponent(question.type)

  const changeAndAddAnswer = () => {
    console.log(question, 'question')
    let rightViewAnswer = userAnswer
    if (question.type === 'chooseMany') {
      rightViewAnswer = Object.entries(userAnswer).map(([answer, verity]) => {
        if (verity) return answer
      })
    }

    goNextQuestion(rightViewAnswer, question)
  }

  return (
    <div className="question-box">
      <div className="question">
        <Area text={question.text} />
        <QuestionComponent
          question={question}
          setUserAnswer={setUserAnswer}
          userAnswer={userAnswer}
          setDisabledClick={setDisabledClick}
        />
      </div>
      <div className="btn-next">
        <Button name={'Next'} isDisabled={disabledClick} onClick={changeAndAddAnswer} />
      </div>
    </div>
  )
}
