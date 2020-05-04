import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { Subject, of } from 'rxjs';

import {CountriesEffects}  from './country.effect';
import * as CountriesAction  from './country.action';
import { CountriesService } from '../countries.service';
import {  HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountryEffect ', ()=>{
  let actions: Subject<any>;
  let effects: CountriesEffects;
  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      CountriesEffects,
      provideMockActions(() => actions),
      CountriesService,
      provideMockStore()
    ],
    imports:[      HttpClientTestingModule]
  });

  effects = TestBed.get(CountriesEffects);
});

it('should be created', async() => {
   expect(effects).toBeTruthy();
 });

 it('#addRouteToHistory should dispatch fromRouterHistoryActions.AddRouteToHistory with a url', async(async() => {
  actions = new Subject();
  const countryNavigatedAction = {
    type: CountriesAction.GET_COUNTRIES,
    payload: "work it"
  };
  actions.next(countryNavigatedAction);
  // spyOn(effects, 'AllContries' ).and.returnValue(of());
  // effects.AllContries.subscribe((result: CountriesAction.GetCountriesSuccess) => {
  //   console.log("effect called")
  //   console.log(result.payload)
  //   expect(result.payload).toEqual('/member');
  // });
}));

})
