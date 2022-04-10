import React from 'react'
import './RadioButtons.scss'

export default function RadioButton({ quizzes, setSelectedQuiz }) {
  // изменить этот компонент под вопросы или создать новый

  return (
    <>
      {quizzes.map((quiz, index) => {
        return (
          <div className="radio-btn" key={quiz.id}>
            <input id={`radio${quiz.id}`} type="radio" onChange={() => setSelectedQuiz(quiz)} name="group"></input>
            <label htmlFor={`radio${quiz.id}`}>{quiz.name}</label>
          </div>
        )
      })}
    </>
  )
}
