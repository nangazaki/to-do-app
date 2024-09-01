import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent, type InputTask } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoHeaderComponent, TodoItemComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  tasks: InputTask[] = [
    {
      id: 'sfdfdfdfd',
      title: 'Estudar Angular 18',
      status: 'pending',
      created_at: new Date(),
    },
    {
      id: 'sfdfdfdfd',
      title: 'Estudar SSR no Angular',
      status: 'pending',
      created_at: new Date(),
    },
  ];
}
