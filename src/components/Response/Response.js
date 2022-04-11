import React from 'react'
import './Response.scss'

export default function Response({ results }) {
  const rightAnswer = info => {
    let answer = info.rightAnswer
    if (info.questionInfo.type === 'chooseOne') {
      answer = [info.rightAnswer]
    }
    if (info.questionInfo.type === 'chooseMany') {
      answer = Object.keys(info.rightAnswer).join(', ').split(' ')
    }
    if (info.questionInfo.type === 'match') {
      answer = Object.entries(info.rightAnswer).map(([question, answer]) => `${question} - ${answer}`)
    }
    return answer
  }

  const userAnswer = info => {
    let answer = info.userAnswer
    if (info.questionInfo.type === 'chooseOne') {
      answer = [info.userAnswer]
    }
    if (info.questionInfo.type === 'chooseMany') {
      answer = info.userAnswer.join(', ').split(' ')
    }
    if (info.questionInfo.type === 'match') {
      answer = Object.entries(info.userAnswer).map(([question, answer]) => `${question} - ${answer}`)
    }
    return answer
  }

  return (
    <>
      {results.map((question, index) => {
        return (
          <div className="response" key={index}>
            <div className="question">{question.questionInfo.text}</div>
            <div className="answers">
              <div className="right" key={index}>
                <b>Верный ответ:&nbsp;</b>
                {rightAnswer(question).map((answer, index) => {
                  return (
                    <div className={`right-${question.questionInfo.type}`} key={index}>
                      {answer} &nbsp;
                    </div>
                  )
                })}
              </div>

              {question.score === 0 ? (
                <>
                  <div className="wrong" key={index}>
                    <b>Ваш ответ:&nbsp;</b>
                    {userAnswer(question).map((answer, index) => {
                      return (
                        <div className={`wrong-${question.questionInfo.type}`} key={index}>
                          {answer}
                        </div>
                      )
                    })}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        )
      })}
    </>
  )
}
