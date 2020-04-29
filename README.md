# Region

## Project introduction

This project application is used for displaying specific country info according to the user's selection in the region and country dropdowns. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3, using the NgRx framework for state management, Angular powered Bootstrap for building up styled components such as dropdowns and table. 

## Project Structure

The project contains two featured components: regions and country-detail for item selecting in Region and Country dropdowns, and showing the table of selected country information respectively, with regions component directly replacing the `app.component.ts` and `app.component.html` as the homepage and `country-detail.component.ts` placed in folder `country-detail`; a service file named `countries.service.ts` was created for getting the information from the api based on the region selected. Since NgRx is used, and for this project, there are two states in use which are countries and country for all countries and single country respectively, so the state of the whole application will be stored within the single store and all the country information is called and gotten from the store.In folder `_state`, it contains `country.action.ts`, `country.reducer.ts` and `country.select.ts` for state management to countries, similarly, in folder `_state-country`, I created `onecountry.action.ts`, `onecountry.reducer.ts` and `onecountry.select.ts` for country, alongside with it, `country.effect.ts` was placed in `_state` folder serving as effect for listening for events and triggering an action which is sent to the reducer.

## Installation instruction

Run `npm install` for all installation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Demonstration

For demonstrating the result on the web page, after directing to `http://localhost:4200/`, what appears on the page is supposed to be a `Region` dropdown and a row of table displaying the attribute names: `Name`, `Capital`, `Population`, `Currencies`, `Flag` in order. By clicking the `Region` dropdown, there are supposed to be two items: `Asia` and `Europe` in the list. By clicking on one of the items in the list, for example `Asia`, there's supposed to be another dropdown showing right now on the right side of the `Region` dropdown, which is the `Country` dropdown, by clicking the `Counrty` dropdown, a list of items should be displayed and can be browsed by scrolling down vertically. By clicking on one of the items in the `Country` dropdown, for example `Armenia`, the row below the attribute names should now be displayed accordingly with the exact information corresponding to the attribute. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
