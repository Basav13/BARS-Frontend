import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
   
  email:String
  password:String
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router : Router){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['home']);
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
      //console.log(this.loginForm.value);
    
        this.authService.login(this.email,this.password).subscribe({
          next : result => {
            this.router.navigate(['home']);
          },
          error:(err: Error) => {
            alert(err.message); 
          }
        }

        )
  }
}
