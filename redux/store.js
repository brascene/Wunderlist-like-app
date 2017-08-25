import React from 'react'
import { AsyncStorage } from 'react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { composeWithDevTools } from 'remote-redux-devtools'
import { autoRehydrate, persistStore } from 'redux-persist'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

let store = compose(
  composeWithDevTools(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)(createStore)(reducers)

persistStore(store, {
  storage: AsyncStorage,
  blacklist: ['message']
})

export default store
