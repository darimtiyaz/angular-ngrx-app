import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer, exampleReducer } from './store/store.reducers';
import { ExampleEffects } from './store/store.effects';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { effects, stateProviders } from './store/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideStore(),
    ...stateProviders,
    provideEffects(effects),
  ]
};