import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit{
  constructor(private userService: UserService, private router: Router) {
  }

  register(registrationForm: NgForm) {
    var user = new User(0, "", "","", 0, false);
    user.username = registrationForm.value.username;
    user.password = registrationForm.value.password;
    user.role = "ROLE_USER";
    this.userService.registerUser(user).subscribe(res=>console.log(res));
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }
}
