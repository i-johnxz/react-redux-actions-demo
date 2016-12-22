import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import users from './reducers'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import UserPage from './components'
const logger = createLogger();
const seerApp = combineReducers({
  users
})

let store = createStore(seerApp,applyMiddleware(thunk,promiseMiddleware,logger))

render(
  <Provider store={store}>
    <UserPage />
  </Provider>
,document.getElementById('app'))