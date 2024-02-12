import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from "../question.service";
import {Question} from "../question";
import { TestService } from '../test.service';
@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css'],
})
export class ViewQuestionsComponent implements OnInit{
  questions: Question[] = [];
  testId: number;
  testTitle: string;
  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService,private testService: TestService) {}
  updateQuestion(id: number) {
    localStorage.setItem("currentQuestion",id.toString());
    this.router.navigate(['update-question']);
  }
  deleteQuestion(id: number){
    this.questionService.deleteQuestionByQuestionId(id).subscribe(res=>console.log(res));
    this.router.navigate(['view-questions',this.testId]);
  }

  ngOnInit(): void {
    this.testId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.testService.getTestById(this.testId).subscribe(data=> this.testTitle = data.testTitle)
    this.questionService.getQuestionsByTestId(this.testId).subscribe(data => this.questions = data);
  }
}
