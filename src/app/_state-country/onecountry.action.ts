import {Action} from "@ngrx/store";


export const GET_COUNTRY ="GET_COUNTRY";


export class GetCountry implements Action{
  readonly type = GET_COUNTRY;
  // pass single country to reducer
  constructor( readonly country: any){  }
}


export type Actions = GetCountry;

