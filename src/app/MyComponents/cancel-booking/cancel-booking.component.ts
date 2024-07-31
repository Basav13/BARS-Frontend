import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/Common/booking';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit{

  myBooking:Booking;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    const myArrayString = this.route.snapshot.queryParamMap.get('myBooking');
    this.myBooking = JSON.parse(myArrayString);
  }

}
