import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Common/users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  user: Users = new Users();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  addUser() {
    const birthDate = new Date(this.user.birthDate.toString());

    // Format the date as "dd-mm-yyyy"
    const formattedBirthDate = birthDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-');

    this.user.birthDate = formattedBirthDate;

    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['login']);
  }
}
