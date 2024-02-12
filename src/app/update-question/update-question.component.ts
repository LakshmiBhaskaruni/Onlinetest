import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{

  currentQuestionid: number;
  question: Question;
  constructor(private router: Router, private questionService: QuestionService) {}


  ngOnInit(): void {
    this.currentQuestionid=Number(localStorage.getItem("currentQuestion"));
    this.questionService.getQuestionByQuestionId(this.currentQuestionid).subscribe(data=>{
      console.log(data);
      this.question=data;
      console.log(this.question);
    });

  }

  viewQuestions() {
    this.questionService.updateQuestion(this.question).subscribe(res=>{
      console.log(res);
    this.router.navigate(['/admin-dashboard/view-test/view-questions',this.question.testId]);
  });
    
  }

}
