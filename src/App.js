import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import QuizBox from './Module/QuizBox/QuizBox'
import StartBox from './Module/StartBox/StartBox'
import './index.scss'
import { URL } from './index'

export default function App() {
  const [runningQuiz, setRunningQuiz] = useState()

  useEffect(async () => {
    const { data } = await axios.get(`${URL}/all`)
  }, [])

  const {
    isLoading,
    error,
    data: quizzes
  } = useQuery('repoData', () => axios.get(`${URL}/all`).then(({ data }) => data))

  if (isLoading)
    return (
      <div className="error">
        <div className="loader"></div>
      </div>
    )
  if (error) return <div className="error">An error has occurred: {error.message}</div>

  return (
    <>
      {runningQuiz ? (
        <QuizBox quiz={runningQuiz} restart={() => setRunningQuiz(null)} />
      ) : (
        <StartBox quizzes={quizzes} setRunningQuiz={setRunningQuiz} />
      )}
    </>
  )
}
