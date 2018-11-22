import React from 'react'

export const todos = []
// [
//   { id: 1, text: 'Todo 1', done: true },
//   { id: 2, text: 'Todo 2', done: false },
//   { id: 3, text: 'Todo 3' },
// ]

export const addTodo = text => ({ todos }) => {
  const id = todos.length ? todos[todos.length - 1].id : 0
  return {
    todos: [...todos, { id: id + 1, text }],
  }
}

export const toggleDone = id => ({ todos }) => {
  const index = todos.findIndex(todo => todo.id === id)
  return {
    todos: [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1),
    ],
  }
}

export const removeTodo = id => ({ todos }) => ({
  todos: todos.filter(todo => todo.id !== id),
})

const TodosContext = React.createContext({
  todos,

  addTodo(text) {
    return addTodo(text)(todos)
  },

  toggleDone(id) {
    return toggleDone(id)(todos)
  },

  removeTodo(id) {
    return removeTodo(id)(todos)
  },
})

export default TodosContext
