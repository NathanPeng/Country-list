import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import {countriesReducer} from './_state/country.reducer';
import  {countryReducer} from './_state-country/onecountry.reducer';
import {CountriesEffects} from './_state/country.effect';

import { HttpClientModule } from '@angular/common/http';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import {AppState} from './_state/country.state';


// export interface AppState{
//    countries: any
// }

// tslint:disable-next-line: one-variable-per-declaration
const reducers: ActionReducerMap<AppState> = {
   countries: countriesReducer,
   country: countryReducer
}

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CountriesEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
