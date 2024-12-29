import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/common/card/card.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardComponent],
  exports: [CardComponent],  // Export CardComponent to be used in other modules
})
export class SharedModule {}
