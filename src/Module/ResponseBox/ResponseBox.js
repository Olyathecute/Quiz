import React from 'react'
import './ResponseBox.scss'
import Button from '../../components/Button/Button'
import Area from '../../components/Area/Area'
import Response from '../../components/Response/Response'

export default function ResponseBox({ results, restart }) {
  const [collectedPoints, maxPoints] = results.reduce(
    (acc, current) => {
      acc[0] += current.score
      acc[1] += current.questionInfo.value
      return acc
    },
    [0, 0]
  )
  return (
    <div className="response-box">
      <div className="btn">
        <Button name={'New Quiz'} onClick={restart} />
      </div>
      <div className="results">
        <Area text={`Ваш результат: ${collectedPoints}/${maxPoints}`} />
        <Response results={results} />
      </div>
    </div>
  )
}
