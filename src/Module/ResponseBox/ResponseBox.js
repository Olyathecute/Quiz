import React from 'react'
import './ResponseBox.scss'
import Button from '../../components/Button/Button'
import Area from '../../components/Area/Area'
import Response from '../../components/Response/Response'

export default function ResponseBox({ data }) {
  return (
    <div className="response-box">
      <Button name={'New Quiz'} />
      <div className="results">
        <Area text={data.text} />
        <Response />
      </div>
    </div>
  )
}
