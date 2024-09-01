import { Component, Input } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale'

export interface InputTask {
  id: string,
  title: string,
  status: 'pending' | 'done',
  created_at: Date,
}

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input({ required: true }) task: InputTask = {
    id: '',
    title: '',
    status: 'pending',
    created_at: new Date()
  };

  dateFormatter(date: Date) {
    const newDate = formatDistanceToNow(date, {
      locale: pt,
      addSuffix: true
    })
    return newDate;
  }
}
