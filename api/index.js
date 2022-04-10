const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const quizes = require('./quizData')
const quizById = quizes.reduce((acc, cur) => {
  acc[cur.id] = cur
  return acc
}, {})

const app = express()
const port = 7777

app.use(cors())
app.use(bodyParser.json())

const sleep = ms => new Promise(r => setTimeout(r, ms))

app.get('/all', (req, res) => {
  res.json(
    quizes.map(quiz => {
      const { id, name, description, picture, questions } = quiz
      return {
        id,
        name,
        description,
        picture,
        questionsCount: questions.length
      }
    })
  )
})

const prepareQuestion = (quizId, questionId = 0) => {
  const question = quizById[quizId]?.questions?.[questionId]
  if (!question) return null

  const q = Object.assign({}, question, { id: questionId })
  q.answer = undefined
  return q
}

app.get('/start/:id', async (req, res) => {
  await sleep(1000)
  const question = prepareQuestion(req.params.id)
  if (!question) return res.sendStatus(400)
  res.json(question)
})

const getScore = (question, answer) => {
  switch (question.type) {
    case 'chooseOne': {
      if (typeof answer !== 'string') throw new Error('answer should be a string for chooseOne')
      return question.answer === answer ? question.value : 0
    }
    case 'chooseMany': {
      if (!Array.isArray(answer)) throw new Error('answer should be an array for chooseMany')
      const oneValue = question.value / Object.keys(question.answer).length
      let score = 0
      for (let ans of answer) {
        if (question.answer[ans]) score += oneValue
        else if (question.strict) return 0
        else score -= oneValue
      }
      return score > 0 ? score : 0
    }
    case 'match': {
      if (typeof answer !== 'object') throw new Error('answer should be an object for match')
      const oneValue = question.value / Object.keys(question.answer).length
      let score = 0
      for (let [left, right] of Object.entries(answer)) {
        if (question.answer[left] === right) score += oneValue
        else if (question.strict) return 0
        else score -= oneValue
      }
      return score <= 0 || (question.strict && score !== question.value) ? 0 : score
    }
  }
}

app.post('/answer', (req, res) => {
  try {
    const { quizId, questionId, answer } = req.body
    const question = quizById[quizId]?.questions?.[questionId]

    if (!question) throw new Error('quizId and questionId should be present and point to a existing question')

    const score = getScore(question, answer)

    const next = prepareQuestion(quizId, questionId + 1)

    res.json({ score, next, answer: question.answer })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
