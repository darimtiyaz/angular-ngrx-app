// store/app.effects.ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ExampleActions from './store.actions';
import http from '../core/services/http.service';

@Injectable()
export class ExampleEffects {
  loadData$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(ExampleActions.load),
      mergeMap(() =>
        http.get('/users').then((response) => {
          console.log("response 123-------------- ", response)
          return response.data;
        }).catch((error) => error)
      ),
      map((data) => ExampleActions.loadSuccess({ data })),
      catchError((error) => of(ExampleActions.loadFailure({ error })))
    )
  );

  loadSingleItemById$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(ExampleActions.loadItemById),
      mergeMap(({id}) =>
        http.get(`/users/${id}`).then((response) => 
          ExampleActions.loadItemByIdSuccess({item : response.data}),
          (error) => ExampleActions.loadItemByIdFailure({ error: error.message }) 
        )
      )
    )
  );

  updateExampleItem$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(ExampleActions.updateItem),
      mergeMap(({id, data}) =>
        http.post(`/users/${id}`, data).then((response) => 
          ExampleActions.updateItemSuccess({item : response.data}),
          (error) => ExampleActions.updateItemFailure({ error: error.message }) 
        )
      )
    )
  );
}
