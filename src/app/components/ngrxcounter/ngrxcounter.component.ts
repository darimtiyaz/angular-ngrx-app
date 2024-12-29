import { Component, OnInit, Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, load, loadItemById, updateItem } from '../../store/store.actions';
import { AsyncPipe } from '@angular/common';
import { selectCounter, selectExampleData, selectExampleSingleItem, selectExampleSingleItemError, selectExampleState } from '../../store/store.selectors';
import { SharedModule } from '../../shared/components/shared.module';  // Adjust the path as needed
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ngrxcounter',
  templateUrl: './ngrxcounter.component.html',
  standalone: true,
  imports: [AsyncPipe, CommonModule, SharedModule],
  styleUrls: ['./ngrxcounter.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // This allows unknown elements in the template
})
export class NgrxCounterComponent implements OnInit {
  counter$!: Observable<number>;
  example$!: Observable<any>;
  selectedItem$!: Observable<any>;
  selectedItemError$!: Observable<any>;
  cards = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1', buttonText: 'Learn More' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2', buttonText: 'View Details' },
  ];

  constructor(private store: Store<{ count: number }>) {
    this.counter$ = this.store.select(selectCounter);
    this.example$ = this.store.select(selectExampleState);
    this.selectedItem$ = this.store.select(selectExampleSingleItem);
    this.selectedItemError$ = this.store.select(selectExampleSingleItemError);
  }

  ngOnInit(): void {
    this.store.dispatch(load());
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
    this.counter$.subscribe((res)=>{
      console.log("res: -----------",  res)
    })
    this.example$.subscribe((res)=>{
      console.log("example: -----------",  res)
    });

    const itemId = '1'; // Replace with the actual ID you want to fetch
    this.store.dispatch(loadItemById({ id: itemId }));
    this.selectedItem$.subscribe((item) => console.log('Selected item:', item));
    this.selectedItemError$.subscribe((error) => console.error('Error fetching selected item:', error));

    this.store.dispatch(updateItem({id: itemId, data:{name:"abc", description:"abc abc..."}}))
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  onCardClick(id:any){
    console.log("card clicked: ", id)
    this.store.dispatch(loadItemById({ id }));
  }
}
