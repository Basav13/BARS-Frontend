import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Common/users';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  firstName: String;
  lastName: String;
  birthDate: String;
  gender: String;
  email: String;
  password: String;
  user: Users;
  localItem: String;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.localItem = this.authService.getUserId();
  }

  ngOnInit(): void {
    const userId = Number(this.localItem);
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }

  onUpdate() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.router.navigate(['/profile'])
    });
  }
}
