import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Test} from "./Test";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TestService {
  private testUrl: string = "/test-service/tests/";



  constructor(private http: HttpClient) { }

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>('http://localhost:8081/tests/');
  }
  addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(this.testUrl, test);
  }
  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>(this.testUrl+"/"+id);
  }
  getScore(responses :{questionId: number, chosenOption: number}[]): Observable<number>{
    return this.http.post<number>(this.testUrl+"getScore", responses);
  }
  deletetest(id: number): Observable<void>{
  return this.http.delete<void>(this.testUrl+id);
  }


}
