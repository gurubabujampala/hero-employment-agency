import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {  

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //Inside the auth gard to check for authentication
    console.log("AuthGuard#CanActivate called");

    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string){
    //Check is logged in flag, if true then login
    if(this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
  
}
