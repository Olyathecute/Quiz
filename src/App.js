import React, { useState } from 'react'
import { useQuery } from 'react-query'
import QuizBox from './Module/QuizBox/QuizBox'
import StartBox from './Module/StartBox/StartBox'
import { getAllQuiz } from './requests'
import './index.scss'

export default function App() {
  const [runningQuiz, setRunningQuiz] = useState()

  const { isLoading, error, data: quizzes } = useQuery('repoData', () => getAllQuiz())

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
