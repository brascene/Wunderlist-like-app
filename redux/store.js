import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { composeWithDevTools } from 'remote-redux-devtools'

export default createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))
