import axios from 'axios'

const URL = 'http://localhost:7777'

export const getAllQuiz = () => axios.get(`${URL}/all`).then(({ data }) => data)

export const postAnswer = (quizId, questionId, answer) =>
  axios
    .post(`${URL}/answer`, {
      quizId,
      questionId,
      answer
    })
    .then(({ data }) => data)

export const getNextQuestion = quizId => axios.get(`${URL}/start/${quizId}`).then(({ data }) => data)
