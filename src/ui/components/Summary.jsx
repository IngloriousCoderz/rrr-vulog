import React from 'react'
import { connect } from 'react-redux'

import { areAllDone } from '../../logic'

const enhance = connect(state => ({
  allDone: areAllDone(state),
}))

const Summary = ({ allDone }) => (allDone ? <p>All todos are done!</p> : '')

export default enhance(Summary)
