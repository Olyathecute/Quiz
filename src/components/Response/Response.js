import React from 'react'
import './Response.scss'

export default function Response({ results }) {
  const preformatRightAnswer = (type, answer) => (type === 'chooseMany' ? Object.keys(answer) : answer)

  const formatAnswer = (type, answer) => {
    switch (type) {
      case 'chooseOne':
        return [answer]
      case 'chooseMany':
        return [answer.join(', ')]
      case 'match':
        return Object.entries(answer).map(([question, answer]) => `${question} - ${answer}`)
    }
  }

  return (
    <>
      {results.map((question, index) => {
        const {
          questionInfo: { type, value, text },
          userAnswer,
          rightAnswer,
          score
        } = question
        return (
          <div className="response" key={index}>
            <div className="question">{text}</div>
            <div className="answers">
              <div className="right" key={index}>
                <b>Верный ответ:&nbsp;</b>
                {formatAnswer(type, preformatRightAnswer(type, rightAnswer)).map((answer, index) => (
                  <div className={`right-${type}`} key={index}>
                    {answer}&nbsp;
                  </div>
                ))}
              </div>

              {score !== value ? (
                <div className="wrong" key={index}>
                  <b>Ваш ответ:&nbsp;</b>
                  {formatAnswer(type, userAnswer).map((answer, index) => (
                    <div className={`wrong-${type}`} key={index}>
                      {answer}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )
      })}
    </>
  )
}
