import { Action } from '@ngrx/store';
import { Todo } from '../../shared/models/todo';

export const ActionTypes = {
  ADD: '[todo] Add',
  ADD_FAIL: '[todo] Add fail',
  ADD_SUCCESS: '[todo] Add success',

  LOAD_LIST: '[todo] Load list',
  LOAD_LIST_FAIL: '[todo] Load list fail',
  LOAD_LIST_SUCCESS: '[todo] Load list success',

  REMOVE: '[todo] Remove',
  REMOVE_FAIL: '[todo] Remove fail',
  REMOVE_SUCCESS: '[todo] Remove success'
};

export class TodoAddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: Todo) {
  }
}

export class TodoAddFailAction implements Action {
  type = ActionTypes.ADD_FAIL;

  constructor(public payload: any) {
  }
}

export class TodoAddSuccessAction implements Action {
  type = ActionTypes.ADD_SUCCESS;
}

export class TodoLoadListAction implements Action {
  type = ActionTypes.LOAD_LIST;
}

export class TodoLoadListFailAction implements Action {
  type = ActionTypes.LOAD_LIST_FAIL;

  constructor(public payload: any) {
  }
}

export class TodoLoadListSuccessAction implements Action {
  type = ActionTypes.LOAD_LIST_SUCCESS;

  constructor(public payload: Todo[]) {
  }
}

export class TodoRemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: { index: number }) {
  }
}

export class TodoRemoveFailAction implements Action {
  type = ActionTypes.REMOVE_FAIL;

  constructor(public payload: any) {
  }
}

export class TodoRemoveSuccessAction implements Action {
  type = ActionTypes.REMOVE_SUCCESS;
}
