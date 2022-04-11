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

const formatMayAnswer = manyAnswer =>
  Object.entries(manyAnswer)
    .map(([answer, selected]) => selected && answer)
    .filter(Boolean)

export default function QuestionBox({ question, disabledClick, setDisabledClick, goNextQuestion }) {
  const [userAnswer, setUserAnswer] = useState()
  const QuestionComponent = selectQuestionComponent(question.type)

  const changeAndAddAnswer = () => {
    const rightViewAnswer = question.type === 'chooseMany' ? formatMayAnswer(userAnswer) : userAnswer

    goNextQuestion(rightViewAnswer, question)
    setDisabledClick(true)
    setUserAnswer(null)
  }

  return (
    <div className="question-box">
      <div className="question">
        <Area text={question.text} />
        <QuestionComponent
          key={question.id}
          question={question}
          setUserAnswer={setUserAnswer}
          userAnswer={userAnswer}
          setDisabledClick={setDisabledClick}
        />
      </div>
      <div className="btn">
        <Button name={'Next'} isDisabled={disabledClick} onClick={changeAndAddAnswer} />
      </div>
    </div>
  )
}
