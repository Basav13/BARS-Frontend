import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Category } from 'src/app/Common/category';
import { Passenger } from 'src/app/Common/passenger';
import { Users } from 'src/app/Common/users';
import { AuthService } from 'src/app/Services/auth.service';
import { CategoryService } from 'src/app/Services/category.service';
import { PassengerService } from 'src/app/Services/passenger.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent implements OnInit {
  passengers: Passenger[] = [];
  firstName: String;
  lastName: String;
  birthDate: String;
  gender: String;
  user: Users;
  category: Category;
  categoryId: number;
  myArray: any[];
  //newPassenger: Passenger = new Passenger();
  userId: String;
  myFlightDate:String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private categoryService: CategoryService,
    private passengerService: PassengerService
  ) {
    this.userId = this.authService.getUserId();
  }

  ngOnInit(): void {
    const myArrayString = this.route.snapshot.queryParamMap.get('myArray');
    this.myArray = JSON.parse(myArrayString);
    const myDateString = this.route.snapshot.queryParamMap.get('myFlightDate');
    this.myFlightDate = JSON.parse(myDateString);
  }

  addPassenger() {
    this.userService.getUserById(Number(this.userId)).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.categoryService
        .getCategoryByCatId(this.categoryId)
        .subscribe((data) => {
          this.category = data;
          console.log(this.category);
          var newPassenger: Passenger = {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            gender: this.gender,
            user: {
              id: this.user.id,
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              birthDate: this.user.birthDate,
              gender: this.user.gender,
              email: this.user.email,
              password: this.user.password,
            },
            category: {
              categoryId: this.category.categoryId,
              name: this.category.name,
              discountPercent: this.category.discountPercent,
            },
            flightDate: this.myFlightDate,
            flightId: this.myArray[0],
            bookingAmount: 0
          };

          newPassenger.bookingAmount = this.myArray[6] - this.myArray[6]*newPassenger.category.discountPercent;

          console.log(newPassenger.flightId);

          this.passengers.push(newPassenger);

          this.firstName = '';
          this.lastName = '';
          this.birthDate = '';
          this.gender = '';
        });
    });
  }

  onProceed() {
    console.log(this.passengers);
    this.passengerService.addPassengers(this.passengers).subscribe();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        myPassengers: JSON.stringify(this.passengers),
        flightDetails: JSON.stringify(this.myArray)
      }
    };
    this.router.navigate(['/passengers'],navigationExtras);
  }
}
