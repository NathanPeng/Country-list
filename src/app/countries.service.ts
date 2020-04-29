import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl: string= 'https://restcountries.eu/rest/v2/region/';
  constructor(private http: HttpClient) { }

  // get the information from the api base on region
  getRegionInfo(region:string):Observable<any>{
    return this.http.get(`${this.baseUrl}${region}`);
  }
}
