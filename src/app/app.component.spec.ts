import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MemoizedSelector } from '@ngrx/store';
import  { StoreModule, Store } from '@ngrx/store';
import {reducers} from './app.module';
import { AppState } from './_state/country.state';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let store: Store<AppState>;
let item_dropDown: DebugElement;
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    item_dropDown = fixture.debugElement.query(By.css('.region__seperate .asia'));
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

  }));


it('should create the app', () => {
    expect(component).toBeTruthy();
  });

// it(`should not show countries initially`, () => {
//     expect(component.show).toBeFalsy();
//   });
 // testing funcitons in his part
 it('When you calling ngOnInit when is initialize',async(()=>{
     component.ngOnInit();
     expect(component.storeAll.length).toBe(1);
     expect(component.storeAll[0].name).toBe('Nathan');
 }))
 it('before and after we click on asia',async(()=>{
   expect(fixture.debugElement.queryAll(By.css('.dropdown-item')).length).toBe(2);
   expect(component.show).toBeFalsy();
   // when click Nathon is going to be
   item_dropDown.triggerEventHandler('click', null);
   fixture.detectChanges();
   expect(fixture.debugElement.queryAll(By.css('.dropdown-item')).length).toBe(3);
   expect(component.show).toBeTruthy();
 }))
 it(`When you haven't select anything from the country`, () => {
     expect(component.showTable).toBeFalsy();
   });
 describe(' After you click on a region',()=>{
   // beforeEach(()=>{
   //    console.log(fixture.debugElement.queryAll(By.css('.dropdown-item')));
   //      item_dropDown.triggerEventHandler('click', null);
   //      fixture.detectChanges();
   // });

   it(`When you click on country it shows the tables`, () => {
      // console.log(fixture.debugElement.queryAll(By.css('.dropdown-item')));
       // component.selectCountry('Nathan');
       // fixture.detectChanges();
       item_dropDown.triggerEventHandler('click', null);
       fixture.detectChanges();
       fixture.debugElement.queryAll(By.css('#country'))[0].triggerEventHandler('click',null);
       // console.log(fixture.debugElement.queryAll(By.css('.dropdown-item')));
       expect(component.showTable).toBeTruthy();
   });
 });

});
