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
}
return state
}
