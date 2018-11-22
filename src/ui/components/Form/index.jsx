import React, { Component } from 'react'

import { withTodos } from '../hoc/withTodos'
import Form from './Form'

const enhance = withTodos

class FormContainer extends Component {
  state = { text: '' }

  onChange = event => this.setText(event.target.value)

  onSubmit = event => {
    event.preventDefault()
    const { addTodo } = this.props
    const { text } = this.state
    addTodo(text)
    this.setText('')
  }

  setText = text => this.setState({ text })

  render() {
    const { text } = this.state

    return (
      <Form text={text} onChange={this.onChange} onSubmit={this.onSubmit} />
    )
  }
}

export default enhance(FormContainer)
