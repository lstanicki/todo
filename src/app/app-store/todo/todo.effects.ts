import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from './todo.service';
import {
  ActionTypes,
  TodoAddFailAction,
  TodoAddSuccessAction,
  TodoLoadListAction,
  TodoLoadListFailAction,
  TodoLoadListSuccessAction,
  TodoRemoveFailAction,
  TodoRemoveSuccessAction
} from './todo.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MatSnackBar } from '@angular/material';
import { Todo } from '../../shared/models/todo';

@Injectable()
export class TodoEffects {

  @Effect()
  add$ = this.actions$.pipe(
    ofType(ActionTypes.ADD),
    mergeMap((action) => this.service.add(action['payload']).pipe(
      map(() => new TodoAddSuccessAction()),
      catchError((error: any) => of(new TodoAddFailAction(error)))
    ))
  );

  @Effect()
  addSuccess$ = this.actions$.pipe(
    ofType(ActionTypes.ADD_SUCCESS),
    map(() => new TodoLoadListAction())
  );

  @Effect()
  addFail$ = this.actions$.pipe(
    ofType(ActionTypes.ADD_FAIL),
    tap(() => {
      this.snackBar.open('Nie udało się dodać TODO', 'Ok', { duration: 3500 });
    })
  );

  @Effect()
  loadList$ = this.actions$.pipe(
    ofType(ActionTypes.LOAD_LIST),
    mergeMap(() => this.service.loadList().pipe(
      map((list: Todo[]) => new TodoLoadListSuccessAction(list)),
      catchError((error) => of(new TodoLoadListFailAction(error)))
    ))
  );

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(ActionTypes.REMOVE),
    mergeMap((action) => this.service.remove(action['payload'].index).pipe(
      map(() => new TodoRemoveSuccessAction()),
      catchError((error: any) => of(new TodoRemoveFailAction(error)))
    ))
  );

  @Effect()
  removeSuccess$ = this.actions$.pipe(
    ofType(ActionTypes.REMOVE_SUCCESS),
    map(() => new TodoLoadListAction())
  );

  constructor(private actions$: Actions,
              private service: TodoService,
              private snackBar: MatSnackBar) {
  }
}
