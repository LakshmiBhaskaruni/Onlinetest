import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { User } from '../user';
import {NgForm} from "@angular/forms";
import {AuthRequest} from "../auth-request";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',

  templateUrl: './login-page.component.html',

  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit{

  private token: string;
  variable: string="komal";

  //user: User;

  // authRequest={
  //   "username":"admin",
  //   "password": "admin123"
  // };
  // authRequest={
  //   "username":"komal",
  //   "password": "komal"
  // };

  constructor(private router: Router, private userService: UserService,private authService: AuthService) {}

  ngOnInit(): void {
      //this.getAccessToken(this.authRequest);
  }

  // login() {
  //   this.userService.generatetoken(this.authRequest)
  //     this.userService.getUserByUsername(this.authRequest.username)
  //     .subscribe(data=>{console.log(data);
  //                   if(data.role=="ROLE_ADMIN")
  //                   {this.router.navigate(['/admin-dashboard']);}
  //                   if(data.role=="ROLE_USER")
  //                   {this.router.navigate(['/user-dashboard', data.userId]);}
  //     });

  //   };

  login(formValue: NgForm) {
    console.log(formValue);
    var authRequest = new AuthRequest();
    authRequest.username=formValue.value.username;
    authRequest.password=formValue.value.password;
    this.userService.generatetoken(authRequest).subscribe(res => {console.log(res);
      //localStorage.removeItem("token");
      localStorage.setItem("currentUser",authRequest.username)
      localStorage.setItem("token","Bearer "+res);});

    this.userService.getUserByUsername(authRequest.username)
    .subscribe(data=>{
                    // console.log(data);
                    if(data.role=="ROLE_ADMIN")
                    {
                      this.router.navigate(['/admin-dashboard']);
                      this.authService.login();

                    }
                    if(data.role=="ROLE_USER")
                    {this.router.navigate(['/user-dashboard', data.userId]);}

    });


    // this.userService.getUserByUsername(this.authRequest.username)
    //  .subscribe(data =>
    //             {console.log(data);
    //               if(data.role=="ROLE_ADMIN")
    //               {this.router.navigate(['/admin-dashboard']);}
    //               if(data.role=="ROLE_USER")
    //               {this.router.navigate(['/user-dashboard', data.userId]);
    //             }
    //             });

  }

  goToRegistrationPage() {
    this.router.navigate(['register']);
  }
}

