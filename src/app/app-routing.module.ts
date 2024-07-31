import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { FlightComponent } from './MyComponents/flight/flight.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { PassengersItemComponent } from './MyComponents/passengers-item/passengers-item.component';
import { PassengersComponent } from './MyComponents/passengers/passengers.component';
import { ThankyouComponent } from './MyComponents/thankyou/thankyou.component';
import { UserLoginComponent } from './MyComponents/user-login/user-login.component';
import { UserRegisterComponent } from './MyComponents/user-register/user-register.component';
import { UserComponent } from './MyComponents/user/user.component';
import { BookingsComponent } from './MyComponents/bookings/bookings.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { CancelBookingComponent } from './MyComponents/cancel-booking/cancel-booking.component';
import { UserEditComponent } from './MyComponents/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'profile', canActivate: [AuthGuard], component: UserComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'book', canActivate: [AuthGuard], component: PassengersComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'passengers', component: PassengersItemComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cancel-booking', component: CancelBookingComponent },
  { path: 'edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
