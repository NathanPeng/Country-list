import { countriesReducer, initialValue } from './country.reducer';
import { GetCountriesSuccess } from './country.action';

describe('Country Reducer', () => {
      it('should return init state', () => {
        // dispatch an action from success
        const countryAction = new GetCountriesSuccess(initialValue);
        const newStaate = countriesReducer(undefined, countryAction);
        expect(newStaate).toEqual(initialValue);
      });
});
