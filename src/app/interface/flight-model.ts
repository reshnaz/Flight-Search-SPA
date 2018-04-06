// Model stores flight data

export interface FlightModel {
    FlightCode: string,
    SeatsAvailable: number,
    OriginDestination: { 
        Origin: string, 
        Destination: string, 
        DeptDate: Date,
        ArrDate: Date
    },
    FareDetails: number
}
