import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withFrame } from '../hoc/withFrame'
import { setText, addTodo } from '../../../logic/actions'
import { getText } from '../../../logic'

// HOCs - Higher-Order Components

const mapStateToProps = state => ({ text: getText(state) })

const mapDispatchToProps = (dispatch, { text }) => ({
  onChange: event => dispatch(setText(event.target.value)),
  onSubmit: event => {
    event.preventDefault()
    dispatch(addTodo(text))
  },
})

const enhance = compose(
  connect(mapStateToProps),
  connect(
    null,
    mapDispatchToProps,
  ),
  withFrame(),
)

const Form = ({ text, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input placeholder="What next?" value={text} onChange={onChange} />
  </form>
)

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  text: '',
  onChange: () => console.log('change'),
  onSubmit: () => console.log('submit'),
}

export default enhance(Form)
