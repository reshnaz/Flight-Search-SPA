# FlightSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Project Name
Flight Search App

## Application Description
This application allows users to search for the availability of flights. It takes the following input parameters: 
Origin City, Destination City, Departure Date, Return Date (in case of two-way flight), Passenger Count & Price.

## App Usage/Flow of App
On running the application for the first time & accessing the home page, the following can be seen:
1. A flight search form with two tabs namely, One Way & Return.
2. On the right hand side in the same page, there is a default message displayed that reads "No results to display".
3. User can select the form tab according to trip type. In case of a round (or return) trip, an additional field for return date is displayed.
4. All fields are mandatory and the submit button gets enabled only when all fields are filled. If the user skips a mandatory field for some reason, a warning is shown and the corresponding field border turns red. If the validation passes for a field, the field border would become green.
5. The price range slider has a default selection. This range can be modified to filter search results.
6. On successful submission of form, if there are matching results, corresponding flight details along with fare details are displayed. If no results are found, a message saying "No results to display" is shown.

## Technical Overview
FlightSearchComponent is the parent component that communicates with FlightService in order to fetch results matching a user's input. This component has a child component, the FlightSearchResultComponent that is used to display the search results.
The model used to store a flight's information is the interface called FlightModel.

The application uses Angular in-memory-web-api (please refer the file src-->app-->in-memory-data.service.ts) to demonstrate its usage with test data. A user's search is matched against this in-memory database to return results. This file can be modified to test various scenarios.

Note: Please refer to the "Screenshots" folder for step-by-step output screenshots.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
