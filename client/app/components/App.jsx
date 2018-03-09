import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actionTypes } from '@actions/types'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { note: '' }
  }
  componentDidMount() {
    this.props.testApiRequest()
  }
  renderNotes() {
    return (
      this.props.notes.map((note) => {
        // eslint-disable-next-line
        return <li key={note._id}>{ note.msg }</li>
      })
    )
  }
  render() {
    const { msg, createNoteRequest, notes } = this.props
    return (
      <div>
        <p>Hello from React!</p>
        <p>{msg}</p>
        <div>
          <p style={{ fontWeight: 'bold' }}>Test the database with some notes:</p>
          <ul>
            {notes ? this.renderNotes() : <li>No notes yet! Make one below!</li>}
          </ul>
          <input
            type="text"
            name="note"
            id="note"
            placeholder="Enter a Note"
            value={this.state.note}
            onInput={(e) => {
              this.setState({ note: e.target.value })
            }}
          />
          <button disabled={!this.state.note} onClick={() => {
            if (this.state.note) {
              createNoteRequest(this.state.note)
              this.setState({ note: '' })
            }
          }}
          >Submit
          </button>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  msg: PropTypes.string,
  testApiRequest: PropTypes.func,
  createNoteRequest: PropTypes.func,
  notes: PropTypes.arrayOf({}),
}

const mapStateToProps = (state) => {
  return {
    msg: state.apiTest.msg,
    notes: state.noteReducer.notes
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    testApiRequest() {
      dispatch({ type: actionTypes.API_TEST_REQUEST })
    },
    createNoteRequest(payload) {
      dispatch({
        type: actionTypes.CREATE_NOTE_REQUEST,
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
