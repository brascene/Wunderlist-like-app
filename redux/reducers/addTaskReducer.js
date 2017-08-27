import React from 'react'
import { AsyncStorage } from 'react-native'
import { purgeStoredState } from 'redux-persist'

export default function reducer(state = {
  taskList: []
}, action = {}) {
	switch (action.type){
	case 'NEW_TASK_ADDED': {
    return {...state, taskList: [...state.taskList, {
      taskKey: ([...state.taskList].length + 1).toString(),
      taskDescription: action.payload,
      taskChecked: false
    }]}
	}
  case 'TASK_STATUS_CHANGED': {
    let newTaskList = [...state.taskList]
    let taskIndex = newTaskList.findIndex(x => x.taskKey === action.payload)
    newTaskList[taskIndex].taskChecked = !newTaskList[taskIndex].taskChecked
    return {...state, taskList: newTaskList}
  }
  case 'CLEAR_ALL_TASKS': {
    purgeStoredState({storage: AsyncStorage}, ['addTaskReducer']).then(() => {
      console.log('purge of someReducer completed')
      return state
    }).catch(() => {
      return state
      console.log('purge of someReducer failed')
    })
    return {
      taskList: []
    }
  }
}
return state
}
