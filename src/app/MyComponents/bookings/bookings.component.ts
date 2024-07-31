import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/Common/booking';
import { AuthService } from 'src/app/Services/auth.service';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  localItem: String;
  bookings: Booking[] = [];


  constructor(
    private authService: AuthService,
    private bookingService: BookingService
  ) {
    this.localItem = this.authService.getUserId();
  }

  ngOnInit() {
    const userId = Number(this.localItem);
    this.bookingService.getBookings(userId).subscribe((data) => {
      this.bookings = data;
    });
  }

  
}
