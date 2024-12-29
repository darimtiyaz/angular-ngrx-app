import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { CounterComponent } from '../counter/counter.component';
import { CardComponent } from '../common/card/card.component';
import { SharedModule } from '../../shared/components/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello, world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }

  onCard1Click() {
    console.log('Card 1 button clicked!');
  }

  onCard2Click() {
    console.log('Card 2 button clicked!');
  }
}