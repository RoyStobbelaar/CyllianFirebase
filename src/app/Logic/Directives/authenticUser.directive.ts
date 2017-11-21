import { Directive, ElementRef, Renderer } from '@angular/core';
import {SecurityService} from "../../services/security.service";
import {AuthService} from "../../shared/auth.service";

// Directive decorator
@Directive({ selector: '[authenticatedUser]'})
// Directive class
export class AuthenticUserDirective {
  constructor(el: ElementRef, renderer: Renderer, private _security: SecurityService, private  auth: AuthService) {

    let loggedIn = false;
    this.auth.getAuthState().subscribe((user) => {
      if(user) {
        loggedIn = true;
      }

      if(!this._security.isLoggedIn() && !loggedIn){
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
      }
    });

  }
}
