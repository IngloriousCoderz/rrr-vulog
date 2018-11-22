import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE, SET_TODOS } from './actionTypes'
import todo, * as fromTodo from './todo'

export const getTodo = (state, id) => state.find(todo => todo.id === id)
const isDone = (state, id) => fromTodo.isDone(getTodo(state, id))

export const areAllDone = state => state.every(fromTodo.isDone)

const todos = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_TODOS:
      return payload

    case ADD_TODO: {
      const id = state.length ? state[state.length - 1].id : 0
      return [...state, { id: id + 1, text: payload }]
    }

    case TOGGLE_DONE: {
      const index = state.findIndex(todo => todo.id === payload)
      return [
        ...state.slice(0, index),
        todo(state[index], action),
        ...state.slice(index + 1),
      ]
    }

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

export default todos
