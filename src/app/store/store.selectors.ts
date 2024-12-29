import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ExampleState } from './store.reducers';

// Feature name (namespace)
export const counterFeatureKey = 'counter';

// Select the counter state
export const selectCounter = createFeatureSelector<number>(counterFeatureKey);

export const selectExampleState = createFeatureSelector<ExampleState>('example');
export const selectExampleData = createSelector(selectExampleState, (state) => state.data);
export const selectExampleSingleItem = createSelector(selectExampleState, (state) => state.selectedItem);
export const selectExampleSingleItemError = createSelector(selectExampleState, (state) => state.selectedItemError);

