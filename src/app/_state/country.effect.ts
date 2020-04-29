import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import { switchMap , mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { CountriesService } from "../countries.service";


import * as ContriesAction from './country.action';

@Injectable()
export class CountriesEffects{
  constructor(private _actions$: Actions, private countriesService: CountriesService){}


  // get all information from the api
  @Effect()
  AllContries = this._actions$.pipe(
    // listening for the event ContriesAction.GET_COUNTRY
    ofType(ContriesAction.GET_COUNTRIES),
    // return an observable with the results of or api
    switchMap( ( param  ) => this.countriesService.getRegionInfo(param['region'])
    ),
    //collection the result and  dispatching an  action to the reducer
    switchMap( result =>  of(new ContriesAction.GetCountriesSuccess(result)))
  );


}
