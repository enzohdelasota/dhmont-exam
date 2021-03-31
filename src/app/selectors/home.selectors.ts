import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.State>(
  fromHome.homeFeatureKey
);

export const selectIncidencias = createSelector(
  selectHomeState,
  (state: fromHome.State) => state.incidencias
);
