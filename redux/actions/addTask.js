export const addTask = (taskDescription) => {
	return {
		type: 'NEW_TASK_ADDED',
		payload: taskDescription
	}
}

export const taskDescriptionInserted = (description) => {
  return {
    type: 'TASK_DESCRIPTION_INSERTED',
    payload: description
  }
}
