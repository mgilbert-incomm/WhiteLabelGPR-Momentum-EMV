

import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../services/user/User.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService){}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.userService.userStateModel.loggedIn){
      return true;
    }
    console.log("not logged in being redirected");
    this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url }} )
    return false;
  }
}