import React, { useState } from 'react'
import { useQuery } from 'react-query'
import './QuizBox.scss'
import QuestionBox from '../QuestionBox/QuestionBox'
import Button from '../../components/Button/Button'

export default function QuizBox({ quiz, restart }) {
  const [results, setResults] = useState([]) // contains list of object with userAnswer, score, info about question (text, answer, value, type)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [userAnswer, setUserAnswer] = useState()
  const [disabledClick, setDisabledClick] = useState(true)

  console.log(results)

  const goNextQuestion = userAnswer => {}

  const { isLoading, error, data } = useQuery(
    'repoDataQuiz',
    () => fetch(`http://localhost:7777/start/${quiz.id}`).then(response => response.json()),
    {
      onSuccess: data => setCurrentQuestion(data),
      refetchOnWindowFocus: false
    }
  )

  if (error) return <div className="error-box">An error has occurred: {error.message}</div>

  if (isLoading || !currentQuestion)
    return (
      <div className="error-box">
        <div className="loader"></div>
      </div>
    )

  return (
    <div className="quiz-box">
      <div className="header">
        <Button name={'Start page'} isDisabled={false} onClick={restart} />
        {currentQuestion.id + 1}/{quiz.questionsCount}
      </div>

      <QuestionBox
        question={currentQuestion}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        results={results}
        setResults={setResults}
        setDisabledClick={setDisabledClick}
        disabledClick={disabledClick}
      />
    </div>
  )
}
