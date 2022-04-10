import React, { useState } from 'react'
import { useQuery } from 'react-query'
import './QuizBox.scss'
import QuestionBox from '../QuestionBox/QuestionBox'
import Button from '../../components/Button/Button'
import ResponseBox from '../ResponseBox/ResponseBox'

export default function QuizBox({ quiz, restart }) {
  const [results, setResults] = useState([]) // contains list of object with userAnswer, score, info about question (text, answer, value, type)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [userAnswer, setUserAnswer] = useState()
  const [disabledClick, setDisabledClick] = useState(true)

  console.log(results)

  const goNextQuestion = async (answer, question) => {
    console.log(quiz.id, '1')
    console.log(question.id, '2')
    console.log(answer, '3')

    const response = await fetch('http://localhost:7777/answer', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ quizId: quiz.id, questionId: question.id, answer: answer })
    }).then(res => res.json())

    console.log(response)

    const newResult = {
      userAnswer: answer,
      rightAnswer: response.answer,
      score: response.score,
      questionInfo: question
    }

    setResults([...results, newResult])
    if (response.next !== null) setCurrentQuestion(response.next)
  }

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
    <>
      {results.length === quiz.questionsCount ? (
        <ResponseBox results={results} restart={restart} />
      ) : (
        <div className="quiz-box">
          <div className="header">
            <Button name={'Start page'} isDisabled={false} onClick={restart} />
            {currentQuestion.id + 1}/{quiz.questionsCount}
          </div>

          <QuestionBox
            question={currentQuestion}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            setDisabledClick={setDisabledClick}
            disabledClick={disabledClick}
            goNextQuestion={goNextQuestion}
          />
        </div>
      )}
    </>
  )
}
