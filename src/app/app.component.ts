import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth.service';
import { Users } from './Common/users';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'airbook-app';
  firstName: String;
  localItem: String
  constructor(private auth: AuthService, private userService: UserService) {
    this.localItem = this.auth.getUserId();
  }

  ngOnInit() {
    const userId = Number(this.localItem)
    // this.userService.getName(userId).subscribe((data) => {
    //   this.firstName = JSON.parse(data.toString());
    //   console.log(this.firstName)
    // })
  }

  checkLogin(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout();
  }
}
