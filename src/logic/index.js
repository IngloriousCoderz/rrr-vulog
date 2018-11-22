import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import text from './text'
import todos, * as fromTodos from './todos'
import { ADD_TODO } from './actionTypes'
import { setText } from './actions'

export const getText = state => state.text
export const getTodos = state => state.todos
export const getTodo = (state, id) => fromTodos.getTodo(getTodos(state), id)
// export const areAllDone = state => fromTodos.areAllDone(getTodos(state))

export const areAllDone = createSelector(
  getTodos,
  todos => console.log('recomputing') || fromTodos.areAllDone(todos),
)

const combinedReducer = combineReducers({ text, todos })

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: text(state.text, setText('')),
        todos: todos(state.todos, action),
      }

    default:
      return combinedReducer(state, action)
  }
}

export default rootReducer
