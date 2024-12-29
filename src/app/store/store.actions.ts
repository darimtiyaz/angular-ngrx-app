import { createAction, props } from '@ngrx/store';

// Define counter actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');


export const load = createAction('[Example] Load');
export const loadSuccess = createAction('[Example] Load Success', props<{ data: any }>());
export const loadFailure = createAction('[Example] Load Failure', props<{ error: any }>());

export const loadItemById = createAction('[Example] Load Item By ID', props<{ id: string }>());
export const loadItemByIdSuccess = createAction('[Example] Load Item By ID Success', props<{ item: any }>());
export const loadItemByIdFailure = createAction('[Example] Load Item By ID Failure', props<{ error: string }>());

export const updateItem = createAction('[Example] Update Item', props<{ id: string, data:any }>());
export const updateItemSuccess = createAction('[Example] Update Item Success', props<{ item: any }>());
export const updateItemFailure = createAction('[Example] Update Item Failure', props<{ error: string }>());
