import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../Common/passenger';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl = "http://localhost:8080/api/passengers"
  private postUrl = "http://localhost:8080/api/add-passengers"

  constructor(private httpClient : HttpClient) { }

  getPassengers(): Observable<Passenger[]>{
    return this.httpClient.get<Passenger[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  addPassengers(passengers?:Passenger[]): Observable<Passenger[]>{
    return this.httpClient.post<Passenger[]>(this.postUrl,passengers);
  }

}
