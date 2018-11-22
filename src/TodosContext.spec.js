import { addTodo, toggleDone, removeTodo } from './TodosContext'

describe('Todos Context', () => {
  it('should add a new todo', () => {
    // given
    const stateBefore = {
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
      ],
    }
    const stateAfter = {
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }

    // when
    const state = addTodo('Todo 3')(stateBefore)

    // then
    expect(state).toEqual(stateAfter)
  })

  it("should toggle the 'done' property on a todo", () => {
    // given
    const stateBefore = {
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const stateAfter = {
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: true },
        { id: 3, text: 'Todo 3' },
      ],
    }

    // when
    const state = toggleDone(2)(stateBefore)

    // then
    expect(state).toEqual(stateAfter)

    const newState = toggleDone(2)(state)
    expect(newState).toEqual(stateBefore)
  })
})
