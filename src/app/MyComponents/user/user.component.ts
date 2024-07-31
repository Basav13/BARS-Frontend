import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Common/users';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // users : Users[] = [];
  user: Users;
  localItem: String; 

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.localItem = this.authService.getUserId();
    //console.log(this.localItem);
    //console.log(typeof id);
  }

  ngOnInit(): void {
    const userId = Number(this.localItem);
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }

  onDelete() {
    const userId = this.localItem.toString();
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.authService.logout();
      });
    }
  }
  
  

  // listUsers(){
  //   this.userService.getUsers().subscribe(
  //     data => {
  //       this.users = data;
  //     }

  //   )
  // }
  // userById() {
    
  //   this.userService.getUserById(id).subscribe((data) => {
  //     console.log(data);
  //     this.user = data;
  //   });
  // }
}
