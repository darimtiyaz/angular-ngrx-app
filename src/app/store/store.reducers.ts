import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './store.actions';
import * as ExampleActions from './store.actions';

// Define the initial state
export const initialState = 0;

// Create the reducer function
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);


export interface ExampleState {
  data: any;
  error: any;
  selectedItem: any | null;
  selectedItemError: any | null;
}

export const initialState1: ExampleState = {
  data: null,
  error: null,
  selectedItem: null,
  selectedItemError: null,
};

export const exampleReducer = createReducer(
  initialState1,
  on(ExampleActions.loadSuccess, (state, { data }) => ({ ...state, data })),
  on(ExampleActions.loadFailure, (state, { error }) => ({ ...state, error })),
  on(ExampleActions.loadItemByIdSuccess, (state, { item }) => ({
    ...state,
    selectedItem: item,
    selectedItemError: null,
  })),
  on(ExampleActions.loadItemByIdFailure, (state, { error }) => ({
    ...state,
    selectedItem: null,
    selectedItemError: error,
  }))
);

