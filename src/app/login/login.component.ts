import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { SecurityService } from "../services/security.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `

  <div class='container'>
  <div class='centered'>
    <div class="index-container spacing grid-x"  *ngIf="!isLoggedIn()" >
      <div class="cell medium-12">
        <p class='message'>
          Welcome! Login to access the menu :-)
        </p>
        <p style='text-align: center'>
          <button class="button auth-button"(click)="loginWithGoogle()">Login with Google</button>
        </p>
      </div>
    </div>
    </div>
    </div>

  `,
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public user: any;

  constructor(
    private _auth: AuthService,
    private _security: SecurityService,
    private _router: Router) {

  }

  ngOnInit() {
    this.tryToSignIn();
  }

  loginWithGoogle() {
    this._auth.loginWithGoogle().then(() => {
      this.tryToSignIn();
    })
  }

  public tryToSignIn() {
    this._auth.getAuthState().subscribe((user) => {
      this.user = user;
      console.log(user);
      if(this.user){
      this._security.setLoggedIn(user);
      this._security.setUser(user);
      this._router.navigateByUrl('').then(() => {
        this._router.navigateByUrl('Index');
      });
    }
    });
  }

  public isLoggedIn() {
    return this._security.isLoggedIn();
  }

  public signOut() {
    this._security.signOut();
  }

}
