import { addTodo, toggleDone, removeTodo } from './actions'
import rootReducer, { areAllDone } from '.'

describe('Todos App', () => {
  it('should add a todo from an empty state', () => {
    const stateBefore = undefined
    const stateAfter = {
      text: '',
      todos: [{ id: 1, text: 'Todo 1' }],
    }
    const action = addTodo('Todo 1')

    const state = rootReducer(stateBefore, action)

    expect(state).toEqual(stateAfter)
  })

  it('should add a todo', () => {
    // given
    const stateBefore = {
      text: 'Todo 3',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
      ],
    }
    const stateAfter = {
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const action = addTodo('Todo 3')

    // when
    const state = rootReducer(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })

  it("should toggle the 'done' property on a todo", () => {
    // given
    const stateBefore = {
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const stateAfter = {
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: true },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const action = toggleDone(2)

    // when
    const state = rootReducer(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })

  it('should remove a todo', () => {
    const stateBefore = {
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const stateAfter = {
      text: '',
      todos: [{ id: 1, text: 'Todo 1', done: true }, { id: 3, text: 'Todo 3' }],
    }
    const action = removeTodo(2)

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter)
  })

  it('should check if all todos are done', () => {
    const state = {
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }

    expect(areAllDone(state)).toBe(false)
    expect(areAllDone(state)).toBe(false)
  })
})
