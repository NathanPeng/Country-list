import { Component, OnInit } from '@angular/core';
import {Store, select} from  '@ngrx/store';
import {AppState} from './_state/country.state';
import * as CountriesAction from './_state/country.action';
import {GetCountry} from './_state-country/onecountry.action';
import { Observable } from 'rxjs';
import {allCountries} from  './_state/country.select';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // public region: string[] = ['asian', 'europe'];
  public show: boolean =false;
  // public countries$: Observable<any>;
  public storeAll: any;

  constructor( private store: Store<AppState> ){}

  ngOnInit(){
    // this.countries$ = this.store.select('countries');
    this.store.pipe(select(allCountries)).subscribe(result =>{
      this.storeAll = result;
    });
  }

  clickRegion(name: string){
    // console.log(name);
    // dispatch and action here for the feild
    this.store.dispatch( new CountriesAction.GetCountries(name) );
    this.show = true;
  }
  selectCountry(name: string){
    // debugger


      // get one country by its unique name
      let country =  this.storeAll .filter(country => country.name === name).pop();
      // stores infromation on that one country
      this.store.dispatch( new GetCountry(country) );

  }

  showContries(){
    return {
      'contries__remove': !this.show,
      'contries__show': this.show
    }
  }
}
