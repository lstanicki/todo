import { Injectable } from '@angular/core';
import { Todo } from '../../shared/models/todo';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';

const TODO_LIST_KEY = 'todoList';

@Injectable()
export class TodoService {

  constructor() {
  }

  loadList(): Observable<Todo[]> {
    const listState = localStorage.getItem(TODO_LIST_KEY);
    return of(listState ? JSON.parse(listState) as Todo[] : []);
  }

  add(item: Todo): Observable<any> {
    return timer(1000).pipe(
      tap(() => {
        let list;
        const currentState = localStorage.getItem(TODO_LIST_KEY);
        if (currentState) {
          list = JSON.parse(currentState) as Todo[];
          list.push(item);
        } else {
          list = [item];
        }
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(list));
      })
    );
  }

  remove(index: number): Observable<any> {
    return timer(1000).pipe(
      tap(() => {
        let list = [];
        const currentState = localStorage.getItem(TODO_LIST_KEY);
        if (currentState) {
          list = JSON.parse(currentState) as Todo[];
          list.splice(index, 1);
        }
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(list));
      })
    );
  }

}
