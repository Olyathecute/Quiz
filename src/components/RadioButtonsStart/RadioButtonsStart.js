import React from 'react'
import './RadioButtonsStart.scss'

export default function RadioButtonsStart({ quizzes, setSelectedQuiz }) {
  return (
    <>
      {quizzes.map(quiz => {
        return (
          <div className="radio-btn-start" key={quiz.id}>
            <input id={`radio${quiz.id}`} type="radio" onChange={() => setSelectedQuiz(quiz)} name="group"></input>
            <label htmlFor={`radio${quiz.id}`}>{quiz.name}</label>
          </div>
        )
      })}
    </>
  )
}
