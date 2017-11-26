import {Component} from "@angular/core";
import {AuthService} from "../shared/auth.service";
import {SecurityService} from "../services/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  template: `

  <container>
    <div class="index-container spacing grid-x"  *ngIf="!isLoggedIn()" >
      <div class="cell medium-8">
        <h2>
          Welcome! Login to access the menu :-)
        </h2>
        <p>
          <button class="button auth-button"(click)="loginWithGoogle()">Login with Google</button>
        </p>
      </div>
    </div>


    <div class="index-container spacing grid-x"  *ngIf="isLoggedIn()" >
      <div class="cell medium-8">
        <h2>
          Welcome!<span *ngIf="user"> {{user.displayName}} </span>
        </h2>
        <p>
          Thank you for signing in using Google! Enjoy your stay :-)
        </p>

        <p>
          <button class="button auth-button"(click)="signOut()">Sign out</button>
        </p>
      </div>
    </div>
    </container>

  `,
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public user: any;

  constructor(
    private _auth:AuthService,
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
    this._auth.getAuthState().subscribe((user) =>
    {
      this.user = user;
      this._security.setLoggedIn(user);
      this._security.setUser(user);
      this._router.navigateByUrl('').then(() => {
        this._router.navigateByUrl('Index');        
      });
    });
  }

  public isLoggedIn() {
    return this._security.isLoggedIn();
  }

  public signOut() {
    this._security.signOut();
  }

}
