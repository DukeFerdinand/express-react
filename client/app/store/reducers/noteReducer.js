import { actionTypes } from '@actions/types'

const { CREATE_NOTE_SUCCESS } = actionTypes

export function noteReducer(state = { notes: [] }, action) {
  console.log(action)
  switch (action.type) {
    case CREATE_NOTE_SUCCESS:
      return { notes: [...state, ...action.payload] }
    default:
      return state
  }
}
