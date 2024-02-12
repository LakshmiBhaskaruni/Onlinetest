import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {Question} from "../question";
import {TestService} from "../test.service";
import * as swal from 'sweetalert2';
import Swal from "sweetalert2";

@Component({
  selector: 'app-attend-test',
  templateUrl: './attend-test.component.html',
  styleUrls: ['./attend-test.component.css']
})
export class AttendTestComponent implements OnInit{


  currentUserId: number;

  questions: Question[] = [];
  response: {questionId: number, chosenOption: number}[] = [];
  hashMap = new Map<number, number>();
  testId: number = parseInt(this.route.snapshot.paramMap.get("id"));
  score: number;
  totalMarks: number = 0;
  isTestCompleted: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
              private questionService: QuestionService, private testService: TestService) {
  }
  ngOnInit(): void {
    this.questionService.getQuestionsByTestId(this.testId).subscribe(data => this.questions=data);
    
  }



  updateResponse(i: number, chosenOption: number) {
      this.hashMap.set(i, chosenOption);
      //console.log(this.hashMap);
  }

  finishTest() {
    this.currentUserId= parseInt(localStorage.getItem("currentUser"));
    this.questions.forEach(question=> this.totalMarks+=question.questionMarks);
    this.hashMap.forEach((k,v) => this.response.push( {"questionId": v, "chosenOption": k}  ));
    this.testService.getScore(this.response).subscribe(data => this.score=data);
    this.isTestCompleted = true;
    Swal.fire(
        'Good job!',
        'You have completed the test',
        'success'
    )
    //console.log(this.score);
    // console.log(this.response);
    // console.log(this.hashMap);
  }
}
