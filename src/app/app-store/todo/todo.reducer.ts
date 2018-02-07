import { ActionTypes } from './todo.actions';
import { Todo } from '../../shared/models/todo';

export interface TodoState {
  list: Todo[];
  loading: boolean;
  error: any;
}

const initialState: TodoState = {
  error: null,
  list: [],
  loading: false
};

export function todoReducer(state: TodoState = initialState, action): TodoState {
  switch (action.type) {
    case ActionTypes.ADD:
    case ActionTypes.LOAD_LIST:
    case ActionTypes.REMOVE:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.ADD_FAIL:
    case ActionTypes.LOAD_LIST_FAIL:
    case ActionTypes.REMOVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ActionTypes.ADD_SUCCESS:
    case ActionTypes.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case ActionTypes.LOAD_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload as Todo[],
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
