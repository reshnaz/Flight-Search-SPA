import { Component, Input, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { FlightModel } from './../interface/flight-model';
import { FlightService } from './../service/flight.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  // Necessary variable declarations which will be used in html
  flight: FlightModel;
  flightInput: FlightModel[] = [];
  someRange: Array<any> = [];
  displayRetField: boolean = false;
  removed: FlightModel[] = [];

  flightArr: Array<FlightModel[]> = [];

  // Using constructor, call the FlightService.
  constructor(private _flightService: FlightService) { }
  ngOnInit() {
    // Initializing values in flight model
    this.someRange = [1000, 5000];
    this.flight = {
      FlightCode: "",
      SeatsAvailable: null,
      OriginDestination: { Origin: "", Destination: "", DeptDate: null, ArrDate: null },
      FareDetails: null
    };
  }

  // This function is called from html which in turn calls the functions in our Flight service.
  searchFlights(vals) {
    if (this.displayRetField === true) {
      // Assign input values from user.
      this.flightInput = [
        // When the trip type is two-way
        {
          FlightCode: "",
          SeatsAvailable: vals.passCount,
          OriginDestination: { Origin: vals.originCity, Destination: vals.destCity, DeptDate: vals.deprtDt, ArrDate: null },
          FareDetails: null
        },
        {
          FlightCode: "",
          SeatsAvailable: vals.passCount,
          OriginDestination: { Origin: vals.destCity, Destination: vals.originCity, DeptDate: vals.retDt, ArrDate: null },
          FareDetails: null
        },
      ]
    } else {
      this.flightInput = [
        // When trip type is one way
        {
          FlightCode: "",
          SeatsAvailable: vals.passCount,
          OriginDestination: { Origin: vals.originCity, Destination: vals.destCity, DeptDate: vals.deprtDt, ArrDate: null },
          FareDetails: null
        }
      ]
    }
    // Service function called to add person details to array
    this.flightArr = this._flightService.getFlightDetails(this.flightInput);

  }

  noResults() {
    // Conditions to check whether or not to display results
    if ((this.flightArr.length == 0) || (this.displayRetField === false && this.flightArr[0].length == 0) || (this.displayRetField === true && this.flightArr[1].length == 0)) {
      return true;
    }
  }

  // Price range slider function
  onChange($event) {
    for (let i = 0; i < this.flightArr[0].length; i++) {
      if (!((this.flightArr[0][i].FareDetails >= this.someRange[0]) && (this.flightArr[0][i].FareDetails <= this.someRange[1]))) {
        if (i !== -1) {
          // Remove flight details that don't satify range
          this.removed = this.flightArr[0].splice(i, 1);
        }
      }
    }

    if (this.removed.length !== 0) {
      for (let x = 0; x < this.removed.length; x++) {
        if ((this.removed[x].FareDetails >= this.someRange[0]) && (this.removed[x].FareDetails <= this.someRange[1])) {
          // Add back flight details that satify range
          this.flightArr[0].push(this.removed[x]);
        }
      }
    }
  }

}
