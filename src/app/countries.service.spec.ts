import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import {of} from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountriesService', () => {
  let service: CountriesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[CountriesService]
    });
    service = TestBed.get(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('test call on asia',()=>{
    // provides mock information  to retrieve back from service
    let mockData = [{name:'asia'}];
    spyOn(service,'getRegionInfo').and.returnValue(of(mockData));

    // call servvice method
    service.getRegionInfo('asia').subscribe((res)=>{
      // console.log(res);
        expect(res).toBe(mockData);
    });
  });

});
