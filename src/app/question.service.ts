import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Question} from "./question";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionUrl: string = "/question-service/questions/";

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
   return this.http.get<Question[]>(this.questionUrl);
  }
  getQuestionsByTestId(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl + "/getQuestionsByTestId/" + id);
  }
  getQuestionByQuestionId(id: number): Observable<Question>{
    return this.http.get<Question>(this.questionUrl+id);
  }
  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionUrl, question);

  }
  updateQuestion(question: Question): Observable<Question>{
    return this.http.put<Question>(this.questionUrl, question);
  }
  deleteQuestionByQuestionId(id: number): Observable<void>{
    return this.http.delete<void>(this.questionUrl+id);
  }

}
