import { SET_TEXT } from './actionTypes'

const text = (state = '', action) => {
  const { type, payload } = action

  switch (type) {
    case SET_TEXT:
      return payload

    default:
      return state
  }
}

export default text
