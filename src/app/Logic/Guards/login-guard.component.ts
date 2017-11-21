import {Component, Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {SecurityService} from "../../services/security.service";


@Injectable()
export class LoginGuardComponent implements CanActivate{

  constructor(private _securityService:SecurityService, private _router: Router) {

  }

  canActivate(): any {

    if(this._securityService.isLoggedIn() && this._securityService.getUser()) {
      return true;
    } else {
      this._router.navigate(['/']);
      //return false;
    }
  }

}
