import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  // Import CommonModule to use async pipe

import { NgrxCounterComponent } from './components/ngrxcounter/ngrxcounter.component';

@NgModule({
  declarations: [AppComponent, NgrxCounterComponent],
  imports: [
    BrowserModule,
    CommonModule,  // Import CommonModule to use pipes like async
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
