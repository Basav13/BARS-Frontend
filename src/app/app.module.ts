import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './MyComponents/user/user.component';
import { UserService } from './Services/user.service';
import { UserItemComponent } from './MyComponents/user-item/user-item.component';
import { UserRegisterComponent } from './MyComponents/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './MyComponents/home/home.component';
import { FlightComponent } from './MyComponents/flight/flight.component';
import { FlightService } from './Services/flight.service';
import { PassengersComponent } from './MyComponents/passengers/passengers.component';
import { UserLoginComponent } from './MyComponents/user-login/user-login.component';
import { AuthService } from './Services/auth.service';
import { CategoryService } from './Services/category.service';
import { PassengerService } from './Services/passenger.service';
import { PassengersItemComponent } from './MyComponents/passengers-item/passengers-item.component';
import { ThankyouComponent } from './MyComponents/thankyou/thankyou.component';
import { BookingService } from './Services/booking.service';
import { BookingsComponent } from './MyComponents/bookings/bookings.component';
import { BookingsItemComponent } from './MyComponents/bookings-item/bookings-item.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { AirportService } from './Services/airport.service';
import { CancelBookingComponent } from './MyComponents/cancel-booking/cancel-booking.component';
import { UserEditComponent } from './MyComponents/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserItemComponent,
    UserRegisterComponent,
    HomeComponent,
    FlightComponent,
    PassengersComponent,
    UserLoginComponent,
    PassengersItemComponent,
    ThankyouComponent,
    BookingsComponent,
    BookingsItemComponent,
    AboutUsComponent,
    CancelBookingComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    FlightService,
    AuthService,
    CategoryService,
    PassengerService,
    BookingService,
    AirportService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
