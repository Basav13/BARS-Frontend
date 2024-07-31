import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../Common/flight';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient: HttpClient) { }

  searchFlights(sourceId:Int16Array,destId:Int16Array,sortField:String): Observable<any[][]>{
    var url="http://localhost:8080/api/search-flights?sourceId=" + sourceId + "&destId=" + destId + "&sortField=" + sortField;
    console.log(url);
    return this.httpClient.get<any[][]>(url).pipe(
      map(response => response)
    );

  }
}
