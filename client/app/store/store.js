import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { apiTest } from '@reducers/apiTest'
import { rootSaga } from '@sagas/index'

// Dealing with our Reducers
const reducers = combineReducers({
  apiTest
})

// Using the Saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
