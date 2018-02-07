import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../shared/models/todo';
import { Store } from '@ngrx/store';
import { TodoAddAction, TodoLoadListAction, TodoRemoveAction } from '../app-store/todo/todo.actions';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app-store/app-store.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  form: FormGroup;

  todoList$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor(public formBuilder: FormBuilder,
              private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new TodoLoadListAction());
    this.todoList$ = this.store.select((state: AppState) => state.todo.list);
    this.loading$ = this.store.select((state: AppState) => state.todo.loading);
    this.form = this.formBuilder.group({
      todoName: null
    });
  }

  addTodo(): void {
    const newTodo: Todo = {
      isChecked: false,
      name: this.form.get('todoName').value
    };

    this.store.dispatch(new TodoAddAction(newTodo));
    this.form.reset();
  }

  removeTodo(index: number): void {
    this.store.dispatch(new TodoRemoveAction({ index }));
  }
}
