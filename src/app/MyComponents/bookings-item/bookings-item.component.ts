import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Booking } from 'src/app/Common/booking';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-bookings-item',
  templateUrl: './bookings-item.component.html',
  styleUrls: ['./bookings-item.component.scss']
})
export class BookingsItemComponent {
  bookingStatus:String;
  bookingId:number;
  bStatus:String;
  @Input() booking:Booking;

  constructor(private bookingServices: BookingService , private router: Router){}

  onCancel(){
    this.bookingId = this.booking.bookingId;
    console.log(this.bookingId);
    this.bookingServices.cancelBooking(this.bookingId).subscribe(() => {

      location.reload();
    });
    const navigationExtras: NavigationExtras = {
      queryParams: {
        myBooking: JSON.stringify(this.booking)
      },
    };
    this.router.navigate(['/cancel-booking'],navigationExtras);

  }
}
