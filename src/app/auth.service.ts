import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggerIn: boolean = false;

  login(){
    this.isLoggerIn = true;
  }

  logout(){
    this.isLoggerIn = false;
  }

  isAuthenticated(): boolean{
    return this.isLoggerIn;

  }
}
