import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailComponent } from './country-detail.component';
import  { StoreModule } from '@ngrx/store';
import {reducers} from '../app.module';


describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailComponent ],
      imports: [
        StoreModule.forRoot(reducers)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('When you call ngOnInit and get the intial information from my store',()=>{
    component.ngOnInit();
    // console.log(component.countries)
    expect(component.countries.length).toBe(1);
    expect(component.countries[0].name).toBe('Nathan');
  })
  // it(' Initialy what showTable does',()=>{
  //   expect(component.showTables()).toBeTruthy();
  // })
});
