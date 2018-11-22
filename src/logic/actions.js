import * as types from './actionTypes'

export const fetchTodos = () => ({ type: types.FETCH_TODOS })
export const setTodos = todos => ({ type: types.SET_TODOS, payload: todos })

export const setText = text => ({ type: types.SET_TEXT, payload: text })

export const addTodo = text => ({ type: types.ADD_TODO, payload: text })
export const toggleDone = id => ({ type: types.TOGGLE_DONE, payload: id })
export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id })
