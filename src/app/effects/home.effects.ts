import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as HomeActions from '../actions/home.actions';



@Injectable()
export class HomeEffects {

  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.loadIncidencias),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => HomeActions.loadIncidenciasSuccess({ data })),
          catchError(error => of(HomeActions.loadIncidenciasFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
