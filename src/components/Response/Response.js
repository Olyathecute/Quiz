import React from 'react'
import './Response.scss'

export default function Response(props) {
  return (
    <div className="response">
      <div>{props.text}</div>
      <div className="right">{props.text}</div>
      <div className="wrong">{props.text}</div>
    </div>
  )
}
