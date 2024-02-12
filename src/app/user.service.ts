import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs"
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = "/user-service/user/";
  private adminUrl: string = "/user-service/admin/";
  private securityUrl: string= "/user-service/security/";
  private token: string;

  constructor(private http: HttpClient) { }

//   public generatetoken(request): void{
//     this.http.post<string>("/user-service/security/login",request).subscribe(res => this.token="Bearer "+res);
//     //return this.http.post("/user-service/security/login",request,{responseType: 'text' as 'json'});
// }
public generatetoken(request): Observable<string>{
  return this.http.post<string>("/user-service/security/login",request,{responseType: 'text' as 'json'});
  //return this.http.post("/user-service/security/login",request,{responseType: 'text' as 'json'});
}


  getAllUsers() : Observable<User[]> {
   //const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5qdSIsImlzcyI6InNhbmp1IiwiaWF0IjoxNjkxOTkxODQwLCJleHAiOjE2OTIwNjY5Mzh9.6DlXbaCJdAHetuDhwxAwwikIwy9THYw8EFy9sAEvN-U";
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<User[]>(this.adminUrl+"getAllUsers", {headers: headers});
  }

  assignTestToUser(testId:number, userId:number) {
    //const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5qdSIsImlzcyI6InNhbmp1IiwiaWF0IjoxNjkxOTkxODQwLCJleHAiOjE2OTIwNjY5Mzh9.6DlXbaCJdAHetuDhwxAwwikIwy9THYw8EFy9sAEvN-U";
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<User>(this.adminUrl+"assignTestToUser/" + testId +"/" + userId, {headers: headers});
  }

  getUserById(userId: number){
    // const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrb21hbCIsImlzcyI6InNhbmp1IiwiaWF0IjoxNjkxOTkxNzkwLCJleHAiOjE2OTIwNjY4ODh9.0ILKFRxCjeKfp1yktkypUeqFoWt5X6bVhA4ut-NunnY";
    const headers = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<User>(this.userUrl+"getUser/" + userId, {headers: headers});
  }

  getUserByUsername(username: string) {
    return this.http.post<User>(this.securityUrl+"getUserByUsername", username);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.securityUrl+"/register", user);
  }

  // welcome(token){
  //   return this,http,post<String>(this.)
  // }

}
