import React, { useState } from 'react'
import { useQuery } from 'react-query'
import './QuizBox.scss'
import QuestionBox from '../QuestionBox/QuestionBox'
import Button from '../../components/Button/Button'
import ResponseBox from '../ResponseBox/ResponseBox'
import { postAnswer, getNextQuestion } from '../../requests'

export default function QuizBox({ quiz, restart }) {
  const [results, setResults] = useState([]) // contains list of object with userAnswer, score, info about question (text, answer, value, type)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [userAnswer, setUserAnswer] = useState()
  const [disabledClick, setDisabledClick] = useState(true)

  const goNextQuestion = async (answer, question) => {
    const response = await postAnswer(quiz.id, question.id, answer)

    const newResult = {
      userAnswer: answer,
      rightAnswer: response.answer,
      score: response.score,
      questionInfo: question
    }

    setResults([...results, newResult])
    setUserAnswer(null)
    if (response.next !== null) setCurrentQuestion(response.next)
  }

  const { isLoading, error } = useQuery('repoDataQuiz', () => getNextQuestion(quiz.id), {
    onSuccess: data => setCurrentQuestion(data),
    refetchOnWindowFocus: false
  })

  if (error) return <div className="error">An error has occurred: {error.message}</div>

  if (isLoading || !currentQuestion)
    return (
      <div className="error">
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
            disabledClick={disabledClick}
            setDisabledClick={setDisabledClick}
            goNextQuestion={goNextQuestion}
          />
        </div>
      )}
    </>
  )
}
