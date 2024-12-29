import { Component, input, output, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable, shareReplay, take } from 'rxjs';
import { selectExampleSingleItem } from '../../store/store.selectors';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit, OnDestroy  {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();
  selectedItem$!: Observable<any>;

  constructor(private store: Store<{ count: number }>) {
    this.selectedItem$ = this.store.select(selectExampleSingleItem).pipe(shareReplay(1));
  }

  ngOnInit(): void {
    this.selectedItem$.pipe(take(1)).subscribe((item) => console.log('Selected item: todo', item));
  }

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }

  ngOnDestroy(): void {
    console.log("onDestroy")
  }
}