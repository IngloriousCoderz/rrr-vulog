import { fetchTodosSaga } from './sagas'
import * as api from '../api'
import { setTodos } from './actions'

describe('Sagas', () => {
  it('should fetch some todos', () => {
    const it = fetchTodosSaga()
    expect(it.next().value.CALL).toEqual({
      context: null,
      fn: api.fetchTodos,
      args: [],
    })
    expect(it.next([{ id: 1, text: 'Todo 1', done: true }]).value.PUT).toEqual({
      channel: null,
      action: setTodos([{ id: 1, text: 'Todo 1', done: true }]),
    })
  })
})
