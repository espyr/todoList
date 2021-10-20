import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgressBarComponent} from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ProgressBarComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule        
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
