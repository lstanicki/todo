import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer, TodoState } from './todo/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo/todo.effects';
import { MatSnackBarModule } from '@angular/material';
import { TodoService } from './todo/todo.service';

export interface AppState {
  todo: TodoState;
}

const state = {
  todo: todoReducer
};

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forRoot(state),
    EffectsModule.forRoot([
      TodoEffects
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [TodoService],
  declarations: []
})
export class AppStoreModule {
}
