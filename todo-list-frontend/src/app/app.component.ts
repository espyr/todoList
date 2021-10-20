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
      <input id="search" type="text" [formControl]="filter" placeholder="Filter Todo..." >
      <app-progress-bar *ngIf="isLoading">
      </app-progress-bar>
      <app-todo-item *ngFor="let todo of filteredTodos$  | async" [item]="todo"  (click)="removeTodo($event)"  id="{{todo.id}}" ></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLoading: boolean = true

  todos$: Observable<Todo[]> = new Observable<Todo[]>();
  filter: FormControl;
  filter$: Observable<string>;
  filteredTodos$: Observable<Todo[]> = new Observable<Todo[]>();
  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService
    this.filter = new FormControl('')
    this.filter$ = this.filter.valueChanges.pipe(startWith(''))
    this.getTodos()
  }

  getTodos() {
    this.todos$ = this.todoService.getAll()
    this.todos$.subscribe((data) => {
      if (data.length != 0) {
        this.isLoading = false
      }
    })
    this.filteredTodos$ = combineLatest(this.todos$, this.filter$).pipe(
      map(([todos, filterString]) => todos.filter(todo => todo.task.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }


  removeTodo(event: any){
    const todoId = event.currentTarget.attributes.id.value
    this.isLoading = true
    this.todoService.remove(parseInt(todoId)).subscribe(
      res => this.getTodos(),
      e => {alert(e); this.isLoading = false}
    )
  }

}
