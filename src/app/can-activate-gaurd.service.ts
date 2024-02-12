import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGaurdService implements  CanActivate, CanActivateChild{
  
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not logged in',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      this.router.navigateByUrl("login");
      return false;
    }
    // return this.authService.isAuthenticated();
    // return true;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.authService.isAuthenticated();
    // return true;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
  //   return this.authService.isAuthenticated();

  // }
}
