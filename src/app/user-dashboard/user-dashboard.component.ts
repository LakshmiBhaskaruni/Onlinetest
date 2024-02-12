import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {TestService} from "../test.service";
import {QuestionService} from "../question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Test} from "../Test";
import {Question} from "../question";
import {User} from "../user";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit{

  constructor ( private router: Router, private userService: UserService, private testService: TestService, private questionService: QuestionService, private route: ActivatedRoute) {
    
  }

  questions: Question[] = [];
  user: User = new User(0,'','','',0,false);
  currentUserId: number;
  currentUserName: string;

  ngOnInit(){
    // this.currentUser=localStorage.getItem("currentUser");
    // this.userService.getUserByUsername(this.currentUser).subscribe(data=> {
      
    //   this.user=data;
     
    //   console.log(this.user);
    // });
    this.route.paramMap.subscribe((param)=>{
      this.currentUserId = Number(param.get('id'));
      localStorage.setItem("currentUser",this.currentUserId.toString())
      this.userService.getUserById(this.currentUserId).subscribe((user)=>{
        this.user = user;
        this.currentUserName= user.username;
      })
    });
    

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.route.paramMap.subscribe((param)=>{
  //     this.currentUserId = Number(param.get('id'));
  //     this.userService.getUserById(this.currentUserId).subscribe((user)=>{
  //       this.user = user;
  //       this.currentUserName= user.username;
  //     })
  //   });
  // }

  isViewScore: boolean = false;
  isViewAssignedTest: boolean = false;
  isHome = true;
  currentUser: string;

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }

  home() {
    this.isViewScore= false;
    this.isViewAssignedTest = false;
    this.isHome = true;
  }

  viewAssignedTest() {
    this.isViewScore= false;
    this.isViewAssignedTest = true;
    this.isHome = false;
    }

  viewScore() {
    this.isViewScore= true;
    this.isViewAssignedTest = false;
    this.isHome = false;
  }

 

}
