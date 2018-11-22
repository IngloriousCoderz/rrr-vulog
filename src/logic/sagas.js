import { takeLatest, call, put, select } from 'redux-saga/effects'

import { FETCH_TODOS, ADD_TODO, TOGGLE_DONE, REMOVE_TODO } from './actionTypes'
import { setTodos } from './actions'
import { getTodo } from '.'
import * as api from '../api'

export default function* rootSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga)
  yield takeLatest(ADD_TODO, addTodoSaga)
  yield takeLatest(TOGGLE_DONE, toggleDoneSaga)
  yield takeLatest(REMOVE_TODO, removeTodoSaga)
}

export function* fetchTodosSaga(action) {
  const todos = yield call(api.fetchTodos)
  yield put(setTodos(todos))
}

export function* addTodoSaga(action) {
  yield call(api.postTodo, { text: action.payload })
}

export function* toggleDoneSaga(action) {
  const { payload: id } = action
  const todo = yield select(getTodo, id)
  yield call(api.patchTodo, id, { done: todo.done })
}

export function* removeTodoSaga(action) {
  yield call(api.deleteTodo, action.payload)
}
