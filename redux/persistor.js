import React from 'react'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import store from './store'

export default persistor = persistStore(store, {
  storage: AsyncStorage
})
