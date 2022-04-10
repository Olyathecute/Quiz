import React from 'react'
import './Response.scss'

export default function Response({ results }) {
  console.log(results, 'results')

  return (
    <>
      {results.map((question, index) => {
        return (
          <div className="response" key={index}>
            <div>{question.questionInfo.text}</div>
            <div className="right">{question.rightAnswer}</div>
            {question.score === 0 ? <div className="wrong">{question.userAnswer}</div> : null}
          </div>
        )
      })}
    </>
  )
}
