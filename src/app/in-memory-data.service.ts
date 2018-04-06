import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FlightModel } from './interface/flight-model';

export class InMemoryDataService implements InMemoryDbService {

    // Creating DB for flight details -- sample data to test application

    createDb() {

        const flights: FlightModel[] = [
            {
                "FlightCode": "AI-101",
                "SeatsAvailable": 3,
                "OriginDestination": { "Origin": "BLR", "Destination": "MAA", "DeptDate": new Date("05 May, 2018"), "ArrDate": new Date("05 May, 2018 03:00 AM") },
                "FareDetails": 2000
            },
            {
                "FlightCode": "AI-202",
                "SeatsAvailable": 5,
                "OriginDestination": { "Origin": "HYD", "Destination": "BLR", "DeptDate": new Date("08 May, 2018"), "ArrDate": new Date("08 May, 2018 06:00 AM") },
                "FareDetails": 2000
            },
            {
                "FlightCode": "AI-300",
                "SeatsAvailable": 10,
                "OriginDestination": { "Origin": "BLR", "Destination": "HYD", "DeptDate": new Date("09 May, 2018"), "ArrDate": new Date("09 May, 2018  09:00 PM") },
                "FareDetails": 2000
            }
        ];

        return { flights };

    }

}