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
          const id = `checkbox${index}_${question.id}`
          return (
            <div className="checkbox" key={id}>
              <input id={id} type="checkbox" onChange={handleChange} value={item}></input>
              <label htmlFor={id}>
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
