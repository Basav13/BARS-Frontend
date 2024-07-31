import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airports } from '../Common/airports';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private baseUrl = "http://localhost:8080/api/airports"

  constructor(private httpClient: HttpClient) { }

  getAirports(): Observable<Airports[]>{
    return this.httpClient.get<Airports[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

}
