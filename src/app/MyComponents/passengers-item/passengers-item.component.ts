import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from 'src/app/Common/passenger';
import { AuthService } from 'src/app/Services/auth.service';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-passengers-item',
  templateUrl: './passengers-item.component.html',
  styleUrls: ['./passengers-item.component.scss'],
})
export class PassengersItemComponent implements OnInit {
  myPassengers: Passenger[];
  flightDetails: any[];
  totalFare: number;
  userId : String;
  bookingResponse: any;
  bookingError: any;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private bookingService: BookingService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserId();
  }

  ngOnInit() {
    const myPassengerString =
      this.router.snapshot.queryParamMap.get('myPassengers');
    this.myPassengers = JSON.parse(myPassengerString);
    const myFlightDetails =
      this.router.snapshot.queryParamMap.get('flightDetails');
    this.flightDetails = JSON.parse(myFlightDetails);
    let acc = 0;
    this.totalFare = this.myPassengers.reduce(
      (acc, pass) =>
        acc +
        this.flightDetails[6] -
        this.flightDetails[6] * pass.category.discountPercent,
      0
    );
  }

  async onBook() {
    console.log(this.userId);
    console.log(this.myPassengers[0].flightDate);
    try {
      const response = await this.bookingService.bookFlight(Number(this.userId),this.myPassengers[0].flightDate);
      this.bookingResponse = response;
      this.bookingError = null;
    } catch (error) {
      this.bookingResponse = null;
      this.bookingError = error.message;
    }
    this.route.navigate(['/thankyou']);
  }
}
