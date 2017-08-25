import {REHYDRATE} from 'redux-persist/constants'

export default function reducer(state = {
  message: ''
}, action = {}) {
	switch (action.type){
	case 'TASK_DESCRIPTION_INSERTED': {
    return {
      message: action.payload
    }
	}
  case 'RESET_TASK_INPUT': {
    return {
      message: ''
    }
	}
  case 'persist/REHYDRATE': {
    var incoming = action.payload
    return {
      ...state,
      message: ''
    }
  }
}
return state
}
