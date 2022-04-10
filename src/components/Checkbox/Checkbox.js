import React from 'react'
import './Checkbox.scss'

export default function Checkbox({ question, userAnswer, setUserAnswer, setDisabledClick }) {
  const handleChange = ({ target }) => {
    setUserAnswer({ ...userAnswer, [target.value]: target.checked })

    if (Object.values({ ...userAnswer, [target.value]: target.checked }).indexOf(true) !== -1) setDisabledClick(false)
    else setDisabledClick(true)
  }

  return (
    <div className="checkbox-wrapper">
      <div className="checkbox-column">
        {question.choices.map((item, index) => {
          return (
            <div className="checkbox" key={index}>
              <input id={`checkbox${index}`} type="checkbox" onChange={handleChange} value={item}></input>
              <label htmlFor={`checkbox${index}`}>
                {index + 1}.&nbsp;{item}
              </label>
            </div>
          )
        })}
      </div>
      {question.picture ? <img src={question.picture} className="picture" /> : null}
    </div>
  )
}
