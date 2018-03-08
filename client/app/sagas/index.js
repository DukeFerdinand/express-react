import axios from 'axios'
import { takeLatest, put } from 'redux-saga/effects'

import { actionTypes } from '@actions/types'

const {
  API_TEST_REQUEST,
  API_TEST_SUCCESS,
  API_TEST_FAILURE
} = actionTypes

function* makeApiRequest() {
  const result = yield axios.get('/api')
  if (result.status === 200 && result.data.msg) {
    yield put({
      type: API_TEST_SUCCESS,
      payload: result.data
    })
  } else {
    const error = {
      msg: "We can't contact the API :("
    }
    yield put({
      type: API_TEST_FAILURE,
      payload: error
    })
  }
}

export function* rootSaga() {
  yield takeLatest(API_TEST_REQUEST, makeApiRequest)
}
