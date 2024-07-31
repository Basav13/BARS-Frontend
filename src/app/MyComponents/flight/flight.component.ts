import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event, NavigationExtras, Router } from '@angular/router';
import { Airports } from 'src/app/Common/airports';
import { Flight } from 'src/app/Common/flight';
import { AirportService } from 'src/app/Services/airport.service';
import { FlightService } from 'src/app/Services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  template: `<button (click)="onSearch()">Search Flights</button>`,
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit {
  sourceId: Int16Array;
  destId: Int16Array;
  flight: any[][];
  flightDate: String;
  sortField: String;
  airports: Airports[];

  constructor(
    private flightService: FlightService,
    private router: Router,
    private airportService: AirportService
  ) {}

  ngOnInit(): void {
    this.airportService.getAirports().subscribe((data: Airports[]) => {
      this.airports = data;
    });
  }

  getDuration(startTime: string, endTime: string): { hours: number, minutes: number } {
    const start = new Date(`01/01/2000 ${startTime}`);
    const end = new Date(`01/01/2000 ${endTime}`);
    const durationInMs = end.getTime() - start.getTime();
    const hours = Math.floor(durationInMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationInMs / (1000 * 60)) % 60);
    return { hours, minutes };
  }

  onSearch() {
    //console.log(this.sourceId);
    //console.log(this.sortField);
    this.flightService
      .searchFlights(this.sourceId, this.destId, this.sortField)
      .subscribe((data: any[][]) => {
        this.flight = data;
      });
  }

  onButtonClick(rowIndex: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        myArray: JSON.stringify(this.flight[rowIndex]),
        myFlightDate: JSON.stringify(this.flightDate),
      },
    };
    this.router.navigate(['/book'], navigationExtras);
  }
}
