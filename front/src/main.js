import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { authLoginUserSuccess } from 'actions/UserActions'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory /*hashHistory*/ } from 'react-router'

import {routes} from './routes'
// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')
const store = configureStore(window.INITIAL_STATE, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
let render = (routerKey = null) => {
  

  ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
    MOUNT_NODE
  )
}

const token = sessionStorage.getItem('token');
if (token !== null) {
    store.dispatch(authLoginUserSuccess(token));
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes'], () => render())
}

// ========================================================
// Go!
// ========================================================
render()
