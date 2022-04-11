import React from 'react'
import './Checkbox.scss'

export default function Checkbox({ question, userAnswer, setUserAnswer, setDisabledClick }) {
  const handleChange = ({ target }) => {
    setUserAnswer({ ...userAnswer, [target.value]: target.checked })

    const hasAnswer = target.checked || Object.values(userAnswer).find(Boolean)
    setDisabledClick(!hasAnswer)
  }

  return (
    <div className="checkbox-wrapper">
      <div className="column">
        {question.choices.map((item, index) => {
          const id = `checkbox${index}_${question.id}`
          return (
            <div className="checkbox" key={id}>
              <input id={id} type="checkbox" onChange={handleChange} value={item}></input>
              <label htmlFor={id}>{item}</label>
            </div>
          )
        })}
      </div>
      {question.picture ? <img src={question.picture} className="picture" alt={question.text} /> : null}
    </div>
  )
}
