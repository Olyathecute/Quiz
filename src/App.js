import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import QuizBox from './Module/QuizBox/QuizBox'
import ResponseBox from './Module/ResponseBox/ResponseBox'
import StartBox from './Module/StartBox/StartBox'
import './index.scss'

export default function App() {
  const [runningQuiz, setRunningQuiz] = useState()
  // const [allAnswers, setAllAnswers] = useState({}) // сохранение всех ответов

  const {
    isLoading,
    error,
    data: quizzes
  } = useQuery('repoData', () => fetch('http://localhost:7777/all').then(response => response.json()))

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>
    )
  if (error)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        An error has occurred: {error.message}
      </div>
    )

  // console.log(data, 'data')

  return (
    <>
      {runningQuiz ? (
        <QuizBox quiz={runningQuiz} restart={() => setRunningQuiz(null)} />
      ) : (
        <StartBox quizzes={quizzes} setRunningQuiz={setRunningQuiz} />
      )}
      {/* <ResponseBox data={data} /> */}
    </>
  )
}
