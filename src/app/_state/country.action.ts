import {Action} from "@ngrx/store";


export const GET_COUNTRIES ="GET_COUNTRIES";
export const GET_COUNTRIES_ERROR ="GET_COUNTRIES_ERROR";
export const GET_COUNTRIES_SUCCESS ="GET_COUNTRIES_SUCCESS";


export class GetCountries implements Action{
  readonly type = GET_COUNTRIES;
  constructor( readonly region: string){  }
}

export class GetCountriesError implements Action{
  readonly type = GET_COUNTRIES_ERROR;
  // error string
  constructor( readonly payload: any){}
}
export class GetCountriesSuccess implements Action{
  readonly type = GET_COUNTRIES_SUCCESS;
  constructor(readonly payload: any){ }
}


export type Actions = GetCountries | GetCountriesError | GetCountriesSuccess;

