import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {UserService} from "../user.service";
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css'],
})
export class AssignTestComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}
  users: User[] = [];
  selectedUsers: number[] = [];

  viewTest() {
    this.router.navigate(['view-test']);
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>this.users=data);
  }



  updateSelectedUser(user: User) {
    if (this.selectedUsers.includes(user.userId)) {
      this.selectedUsers = this.selectedUsers.filter((item) => item !== user.userId);
    } else {
      this.selectedUsers.push(user.userId);
    }
    console.log(this.selectedUsers);

  }

  assignAndGoToViewTest() {
    const testId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.selectedUsers.forEach((userId) => this.userService.assignTestToUser(testId, userId).subscribe(res=> console.log(res)));
    this.router.navigate(['/admin-dashboard/view-test']);
  }
}
