import React from 'react'
import './RadioButtons.scss'

export default function RadioButtons({ question, setUserAnswer, setDisabledClick }) {
  const handleChange = event => {
    setUserAnswer(event.target.value)
    setDisabledClick(false)
  }

  return (
    <>
      <div className="radio-btn-wrapper">
        <div className="column">
          {question.choices.map((choice, index) => {
            const id = `radio${index}_${question.id}`
            return (
              <div className="radio-btn" key={id}>
                <input id={id} type="radio" onChange={handleChange} value={choice} name="group"></input>
                <label htmlFor={id}>{choice}</label>
              </div>
            )
          })}
        </div>
        {question.picture ? <img src={question.picture} className="picture" alt={question.text} /> : null}
      </div>
    </>
  )
}
