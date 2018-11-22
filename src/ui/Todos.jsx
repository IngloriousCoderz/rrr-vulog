import React, { PureComponent } from 'react'

import TodosContext, {
  todos,
  addTodo,
  toggleDone,
  removeTodo,
} from '../TodosContext'
import * as api from '../api'
import Form from './components/Form'
import List from './components/List'

class Todos extends PureComponent {
  state = {
    todos,

    addTodo: text => {
      this.setState(addTodo(text))
      api.postTodo({ text })
    },

    toggleDone: id => {
      this.setState(toggleDone(id), () => {
        const todo = this.state.todos.find(todo => todo.id === id)
        api.patchTodo(id, todo)
      })
    },

    removeTodo: id => {
      this.setState(removeTodo(id))
      api.deleteTodo(id)
    },
  }

  async componentDidMount() {
    const todos = await api.fetchTodos()
    this.setState({ todos })
  }

  render() {
    return (
      <TodosContext.Provider value={this.state}>
        <Form />
        <List />
      </TodosContext.Provider>
    )
  }
}

export default Todos
