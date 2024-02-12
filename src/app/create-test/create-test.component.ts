import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Test} from "../Test";
import {TestService} from "../test.service";
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
})
export class CreateTestComponent {
  constructor(private router: Router, private testService: TestService) {}

  createTest(test: Test) {
    console.log(test);
    this.testService.addTest(test).subscribe(res => console.log(res));
    this.router.navigate(['/admin-dashboard/view-test']);
  }
}
