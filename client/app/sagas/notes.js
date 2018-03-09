import axios from 'axios'
import { put } from 'redux-saga/effects'

import { actionTypes } from '@actions/types'

export function* createNote(action) {
  try {
    const result = yield axios.post('/api/new/note', { msg: action.payload })
    if (result.status === 200) {
      yield put({
        type: actionTypes.CREATE_NOTE_SUCCESS,
        payload: result.data
      })
    }
  } catch (err) {
    console.log(err)
  }
}
