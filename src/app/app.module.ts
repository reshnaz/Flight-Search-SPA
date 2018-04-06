import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';
import { FlightService } from './service/flight.service';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common'
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightSearchResultComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NouisliderModule
  ],
  providers: [FlightService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
