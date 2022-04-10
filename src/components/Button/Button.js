import React from 'react'
import './Button.scss'

export default function Button({ name, onClick, isDisabled }) {
  return (
    <button className="button" onClick={onClick} disabled={isDisabled}>
      {name}
    </button>
  )
}
