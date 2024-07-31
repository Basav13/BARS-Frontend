import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from '../Common/users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UserService) {}

  setUserId(userId: number): void {
    localStorage.setItem('userId', userId.toString());
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  isLoggedIn() {
    return this.getUserId() != null;
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['home']);
  }

  login(email: String|null, password: String|null): Observable<any> {
    return this.userService.getByCredentials(email, password).pipe(
      map((user: Users) => {
        if (user.email === email && user.password === password) {
          const userId = user.id;
          this.setUserId(userId);
          return user;
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.log('Error in login', error);
        return throwError(() => new Error('Failed to login'));
      })
    );
  }
}
