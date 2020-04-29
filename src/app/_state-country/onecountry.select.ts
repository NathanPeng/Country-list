import { createSelector} from '@ngrx/store';
import {AppState} from '../_state/country.state';


const selectContries = (state: AppState) => state;

export const oneCountries = createSelector(
  selectContries,
  (state: any) => state.country
);

