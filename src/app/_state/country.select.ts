import { createSelector} from '@ngrx/store';
import {AppState} from './country.state';


const selectContries = (state: AppState) => state;

export const allCountries = createSelector(
  selectContries,
  (state: any) => state.countries
);

