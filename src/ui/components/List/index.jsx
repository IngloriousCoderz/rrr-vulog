import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import classes from './List.module.css'
// import TodosContext from '../../../TodosContext'
import { withFrame } from '../hoc/withFrame'
// import { withTodos } from '../hoc/withTodos'
// import WithFrame from '../WithFrame'

import { toggleDone, removeTodo } from '../../../logic/actions'
import { getTodos } from '../../../logic'

// (f o g)(x) = f(g(x))
// compose(f, g)(x)

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

// const styles = {
//   done: {
//     textDecoration: 'line-through',
//   },
// }

// presentational/container

// const mapStateToProps = state => ({ todos: state.todos })

// const mapDispatchToProps = dispatch => ({
//   toggleDone: id => dispatch(toggleDone(id)),
//   removeTodo: id => dispatch(removeTodo(id)),
// })

// const mapDispatchToProps = { toggleDone, removeTodo }

const enhance = compose(
  // withTodos,
  connect(
    state => ({ todos: getTodos(state) }),
    { toggleDone, removeTodo },
  ),
  withFrame({ background: 'lightblue' }),
  React.memo,
)

const List = ({ todos, toggleDone, removeTodo, style }) => (
  <ul style={style}>
    {todos.map(({ id, text, done }) => (
      <li key={id} className={done ? classes.done : null}>
        <span onClick={() => toggleDone(id)}>{text}</span>
        <button onClick={() => removeTodo(id)}>x</button>
      </li>
    ))}
  </ul>
)

// const FramedList = props => (
//   <TodosContext.Consumer>
//     {({ todos, toggleDone, removeTodo }) => (
//       <WithFrame customStyle={{ background: 'lightblue' }}>
//         {computedStyle => (
//           <List
//             {...props}
//             todos={todos}
//             toggleDone={toggleDone}
//             removeTodo={removeTodo}
//             style={computedStyle}
//           />
//         )}
//       </WithFrame>
//     )}
//   </TodosContext.Consumer>
// )

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool,
    }),
  ).isRequired,
  toggleDone: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

List.defaultProps = {
  todos: [],
  toggleDone: () => console.log('toggle'),
  removeTodo: () => console.log('remove'),
}

export default enhance(List)
