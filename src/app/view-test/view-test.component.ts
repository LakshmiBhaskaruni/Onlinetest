import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import {Test} from "../Test";

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css'],
})
export class ViewTestComponent implements OnInit {
  constructor(private router: Router, private testService: TestService) {}
  tests: Test[] = [];

  goToCreateQuestion() {
    this.router.navigate(['create-question']);
  }
  viewQuestions() {
    this.router.navigate(['view-questions']);
  }
  assignTest() {
    this.router.navigate(['assign-test']);
  }
  deleteTest(id: number){
    this.testService.deletetest(id).subscribe(res=>console.log(res));
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.testService.getAllTests().subscribe(data => this.tests=data);
  }
}
