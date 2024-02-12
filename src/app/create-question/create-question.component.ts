import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from "../question.service";
import {Question} from "../question";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent {
  //question: Question = new Question(0, );
  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) {}
  addAnotherQuestion() {
    this.router.navigate(['/create-question']);
  }
  createQuestion(formValue: NgForm) {
    var question = new Question(0, "", [], -1, -1, -1);
    // console.log(formValue);
    // console.log(formValue.value.questionTitle);
    question.questionTitle = formValue.value.questionTitle;
    question.questionOptions = [formValue.value.questionOption1, formValue.value.questionOption2, formValue.value.questionOption3 ,formValue.value.questionOption4];
    question.questionAnswer = formValue.value.questionAnswer*1;
    question.questionMarks = formValue.value.questionMarks;
    question.testId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(question);

    this.questionService.createQuestion(question).subscribe(res => console.log(res));

    this.router.navigate(['/admin-dashboard/view-test']);
  }





}
