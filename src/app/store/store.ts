import { counterReducer, exampleReducer } from './store.reducers';
import { ExampleEffects } from './store.effects';
import { provideState } from '@ngrx/store';

export const reducers = {
  counter: counterReducer,
  example: exampleReducer,
};

export const stateProviders = Object.entries(reducers).map(([key, reducer]:any) =>
    provideState({ name: key, reducer:reducer })
  );

export const effects = [
  ExampleEffects
];
