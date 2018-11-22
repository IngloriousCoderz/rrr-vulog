import React from 'react'

import TodosContext from '../../../TodosContext'

export const withTodos = Enhanced => {
  const WithTodos = props => (
    <TodosContext.Consumer>
      {value => <Enhanced {...props} {...value} />}
    </TodosContext.Consumer>
  )
  return WithTodos
}
