import React, { useState } from 'react'
import './QuestionBox.scss'
import Checkbox from '../../components/Checkbox/Checkbox'
import Area from '../../components/Area/Area'
import Match from '../../components/Match/Match'
import Button from '../../components/Button/Button'
import RadioButtons from '../../components/RadioButtons/RadioButtons'

export default function QuestionBox({
  question,
  userAnswer,
  setUserAnswer,
  results,
  setResults,
  disabledClick,
  setDisabledClick
}) {
  const QuestionComponent =
    question.type !== 'match' ? (question.type === 'chooseOne' ? RadioButtons : Checkbox) : Match

  const changeAndAddAnswer = () => {
    let rightViewAnswer = userAnswer
    if (question.type === 'chooseMany') {
      rightViewAnswer = Object.entries(userAnswer).map(([answer, verity]) => {
        if (verity) return answer
      })
    }
    if (question.type === 'chooseOne') {
      rightViewAnswer = Object.keys(userAnswer).join('')
    }
    setResults([...results, rightViewAnswer])
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
