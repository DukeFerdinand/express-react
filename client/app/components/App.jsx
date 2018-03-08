import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actionTypes } from '@actions/types'

const App = ({ msg, testApiRequest }) => {
  testApiRequest()
  return (
    <div>
      <p>Hello from React!</p>
      <p>{msg}</p>
    </div>
  )
}

App.propTypes = {
  msg: PropTypes.string,
  testApiRequest: PropTypes.func,
}

const mapStateToProps = (state) => {
  return { msg: state.apiTest.msg }
}
const mapDispatchToProps = (dispatch) => {
  return {
    testApiRequest() {
      dispatch({ type: actionTypes.API_TEST_REQUEST })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
