import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  isCreatetest: boolean = false;
  isViewTest: boolean = false;
  isViewUsers: boolean = false;
  isHome = true;
  currentUser: string;


 
 parentVar: string='komu123';
 
 parentVar1: string;

 onEventClicked(name: string){
  this.parentVar1= name;
 }

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}
  ngOnInit(): void {
    this.currentUser=localStorage.getItem("currentUser");

  }
  logout() {
   
    this.router.navigate(['/login']);
    localStorage.clear();
    this.authService.logout();
  }



  // createTest() {
  //   this.isCreatetest = true;
  //   this.isViewTest = false;
  //   this.isViewUsers = false;
  //   this.isHome = false;
  //   // this.router.navigate(['/create-test']);
  // }
  // viewTest() {
  //   this.isCreatetest = false;
  //   this.isViewTest = true;
  //   this.isViewUsers = false;
  //   this.isHome = false;
  //   // this.router.navigate(['/view-test']);
  // }
  // viewUsers() {
  //   this.isCreatetest = false;
  //   this.isViewTest = false;
  //   this.isViewUsers = true;
  //   this.isHome = false;
  //   // this.router.navigate(['/view-users']);
  // }
 
  // home() {
  //   this.isCreatetest = false;
  //   this.isViewTest = false;
  //   this.isViewUsers = false;
  //   this.isHome = true;
  // }
}
