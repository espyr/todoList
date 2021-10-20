import { Component } from '@angular/core';
import { TodoService } from "./todo.service";
import { Observable, combineLatest } from "rxjs";
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text"  >
      <app-progress-bar *ngIf="isLoading">  
      </app-progress-bar>
      <app-todo-item *ngFor="let todo of todos$  | async" [item]="todo" ></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLoading: boolean = true

  readonly todos$: Observable<Todo[]>;

  constructor(todoService: TodoService) {
    this.todos$ = todoService.getAll()
    this.todos$.subscribe((data) => {
      if (data.length != 0) {
        this.isLoading = false
      }
    })

  
  }
}
