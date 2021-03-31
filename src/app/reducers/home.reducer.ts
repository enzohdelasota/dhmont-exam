import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { Incidencia } from '../Incidencia';

export const homeFeatureKey = 'incidencias';

export interface State {
  incidencias: Incidencia[];
}

export const initialState: State = {
  incidencias: [{id: 1, description: 'from ngrx', user: 'ngrx', categoriaId: 1, photo_path: '', state: ''}],
};


export const reducer = createReducer(
  initialState,

  on(HomeActions.loadIncidencias, state => state),
  on(HomeActions.loadIncidenciasSuccess, (state, action) => state),
  on(HomeActions.loadIncidenciasFailure, (state, action) => state),

);

