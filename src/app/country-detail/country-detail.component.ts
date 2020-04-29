import { Component, OnInit } from '@angular/core';
import {Store, select} from  '@ngrx/store';
import {AppState} from '../_state/country.state';

import {oneCountries} from  '../_state-country/onecountry.select';



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  public countries:any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(oneCountries)).subscribe(result =>{
      this.countries = [result];
    });
  }

}
