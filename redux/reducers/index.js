import {combineReducers} from 'redux'
import addTaskReducer from './addTaskReducer'
import addTextForTask from './addTextForTask'

export default combineReducers({
  addTaskReducer,
  addTextForTask
})
