import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from '../Common/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  async bookFlight(userId: number, flightDate: String): Promise<any> {
    var url =
      'http://localhost:8080/api/book?userId=' +
      userId +
      '&flightDate=' +
      flightDate;
    try {
      const response = await lastValueFrom(this.httpClient.get(url));
      return response;
    } catch (error) {
      throw error;
    }
  }

  getBookings(userId: number): Observable<Booking[]> {
    var byIdUrl = 'http://localhost:8080/api/get-bookings?userId=' + userId;
    return this.httpClient
      .get<Booking[]>(byIdUrl)
      .pipe(map((response) => response));
  }

  cancelBooking(bookingId: number){
    var cancelUrl =
      'http://localhost:8080/api/cancel-booking?bookingId=' + bookingId;
    return this.httpClient
      .get<String>(cancelUrl)
      .pipe(map((response) => response));
  }
}
