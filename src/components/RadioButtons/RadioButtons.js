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
        <div className="radio-btn-column">
          {question.choices.map((item, index) => {
            return (
              <div className="radio-btn" key={index}>
                <input id={`radio${index}`} type="radio" onChange={handleChange} value={item} name="group"></input>
                <label htmlFor={`radio${index}`}>{item}</label>
              </div>
            )
          })}
        </div>
        {question.picture ? <img src={question.picture} className="picture" /> : null}
      </div>
    </>
  )
}
