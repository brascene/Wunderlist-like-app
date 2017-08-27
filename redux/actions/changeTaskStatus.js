

export const changeTaskStatus = (taskKey) => {
  return {
    type: 'TASK_STATUS_CHANGED',
    payload: taskKey
  }
}

export const resetTaskInput = () => {
  return {
    type: 'RESET_TASK_INPUT',
  }
}

 export const clearAllTasks = () => {
   return {
     type: 'CLEAR_ALL_TASKS'
   }
 }
