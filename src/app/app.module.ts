import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule,
  MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './app-store/todo/todo.service';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './app-store/app-store.module';

const routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    AppStoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TodoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
