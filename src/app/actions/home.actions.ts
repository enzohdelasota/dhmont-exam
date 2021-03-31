import { createAction, props } from '@ngrx/store';

export const loadIncidencias = createAction(
  '[Home] Load Incidencias'
);

export const loadIncidenciasSuccess = createAction(
  '[Home] Load Incidencias Success',
  props<{ data: any }>()
);

export const loadIncidenciasFailure = createAction(
  '[Home] Load Incidencias Failure',
  props<{ error: any }>()
);
