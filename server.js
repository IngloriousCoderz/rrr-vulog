const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3001
const STATUS_CREATED = 201
const STATUS_NO_CONTENT = 204

let id = 1
let todos = [
  { id: id++, text: 'Todo 1', done: true },
  { id: id++, text: 'Todo 2', done: false },
  { id: id++, text: 'Todo 3' },
]

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())

app.get('/todos', (request, response) => {
  response.json(todos)
})

app.get('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const todo = todos[index]
  response.json(todo)
})

app.post('/todos', (request, response) => {
  // const newTodo = { id: id++, ...request.body }
  const newTodo = Object.assign({ id: id++ }, request.body)
  todos.push(newTodo)
  response.status(STATUS_CREATED).json(newTodo)
})

app.put('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const newTodo = request.body
  todos[index] = newTodo
  response.status(STATUS_NO_CONTENT).send()
})

app.patch('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const newTodo = request.body
  todos[index] = Object.assign(todos[index], newTodo)
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos/:id', (request, response) => {
  const index = findIndex(request)
  todos.splice(index, 1)
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos', (request, response) => {
  todos = []
  response.status(STATUS_NO_CONTENT).send()
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

function findIndex(request) {
  return todos.findIndex(({ id }) => id === parseInt(request.params.id, 10))
}
