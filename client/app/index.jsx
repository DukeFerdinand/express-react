import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'Loading...'
    }
  }
  componentDidMount() {
    axios.get('/api').then(res => this.setState({ msg: res.data.msg }))
  }
  render() {
    return (
      <div>
        <p> Hello from React!</p>
        <p>{ this.state.msg }</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
