import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../logic'
import rootSaga from '../logic/sagas'
import { fetchTodos } from '../logic/actions'
import Form from './components/Form/Form'
import List from './components/List'
import Summary from './components/Summary'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

sagaMiddleware.run(rootSaga)

store.dispatch(fetchTodos())

// console.log(store.getState())
// store.subscribe(() =>
//   console.log(`Store changed: ${JSON.stringify(store.getState())}`),
// )
// const action = addTodo('Todo 1')
// store.dispatch(action)

const App = () => (
  <Provider store={store}>
    <>
      <Form />
      <List />
      <Summary />
    </>
  </Provider>
)

export default App
