import { actionTypes } from '@actions/types'

const { API_TEST_SUCCESS, API_TEST_FAILURE } = actionTypes

export function apiTest(state = { msg: 'Loading...' }, action) {
  switch (action.type) {
    case API_TEST_SUCCESS:
      return action.payload
    case API_TEST_FAILURE:
      return action.payload
    default:
      return state
  }
}
