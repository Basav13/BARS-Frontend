import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Users } from '../Common/users';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/users"
  private postUrl = "http://localhost:8080/api/user"
  

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getUserById(userId:number): Observable<Users>{
    var byIdUrl = "http://localhost:8080/api/user-profile?userId=" + userId; 
    return this.httpClient.get<Users>(byIdUrl).pipe(
      map(response => response)
    );
  }

  addUser(user?: Users): Observable<Object>{
    return this.httpClient.post<Object>(this.postUrl,user);
  }

  getByCredentials(email:String,password:String): Observable<Users>{
    var loginUrl = "http://localhost:8080/api/user/login?email=" + email + "&password=" + password;
    return this.httpClient.get<Users>(loginUrl).pipe(
      map(response => response)
    );

  }

  updateUser(user:Users): Observable<Users>{
    var updateUrl = "http://localhost:8080/api/user/update";
    return this.httpClient.put<Users>(updateUrl,user);
  }

  getName(userId: number): Observable<String>{
    var nameUrl = "http://localhost:8080/api/user/first-name?userId=" + userId;
    return this.httpClient.get<String>(nameUrl).pipe(
      map(response => response)
    );
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.postUrl}/delete/${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.delete<any>(url, httpOptions).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}


