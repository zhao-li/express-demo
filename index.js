const express = require('express')
const app = express()

const basketsRouter = require('./routes/baskets')

const PORT = 8080
app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome')
})

app.get('/about', (req, res) => {
  res.send('you are on the about page')
})

app.get('/about/students/:studentId', (req, res) => {
  const studentId = req.params.studentId
  res.send(`Thanks for your inquiry.
  here is information about student ${studentId}!`)
})

app.use('/baskets', basketsRouter)

app.listen(PORT)

module.exports = app