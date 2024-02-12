import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TestService} from "../test.service";
import {Test} from "../Test";
import {UserService} from "../user.service";
import {User} from "../user";


@Component({
  selector: 'app-view-assigned-test',
  templateUrl: './view-assigned-test.component.html',
  styleUrls: ['./view-assigned-test.component.css']
})
export class ViewAssignedTestComponent implements OnInit{
  test: Test = new Test(0,"Dummy", "","","");
  //userId:number = parseInt(this.route.snapshot.paramMap.get("id"));


  @Input()
  testId: number
  constructor(private route: ActivatedRoute, private testService: TestService) {
  }
  ngOnInit(): void {
    console.log(this.testId);
    this.testService.getTestById(this.testId).subscribe(data => this.test=data);
  }


}
