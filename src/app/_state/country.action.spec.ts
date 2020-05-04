import * as Country from "./country.action";

describe('GET_COUNTRIES', () => {
  it('should be created', () => {
    const action = new Country.GetCountries("Hello");
    expect({ ...action} ).toEqual({ region: "Hello", type: "GET_COUNTRIES" });
  });
});
describe('GET_COUNTRIES_ERROR', () => {
  it('should be created', () => {
    const action = new Country.GetCountriesError("error");
    expect({ ...action} ).toEqual({ payload: "error", type: "GET_COUNTRIES_ERROR" });
  });
});
describe('GET_COUNTRIES_SUCCESS', () => {
  it('should be created', () => {
    const action = new Country.GetCountriesSuccess("success");
    expect({ ...action} ).toEqual({ payload: "success", type: "GET_COUNTRIES_SUCCESS" });
  });
});
