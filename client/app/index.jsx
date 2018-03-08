import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { store } from '@store/store'
import App from './components/App'

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={App} />
      </Router>
    </Provider>
  )
}

render(<Root />, document.getElementById('app'))
