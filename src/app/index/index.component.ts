import {Component, OnInit} from "@angular/core";
import {AuthService} from "../shared/auth.service";
import {SecurityService} from "../services/security.service";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  public user: any;

  constructor(
    private auth: AuthService,
    private _security: SecurityService) {
  }

  ngOnInit() {
    this.tryToSignIn();
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then(() => {
      this.tryToSignIn();
    })
  }

  public tryToSignIn() {
    if(this.user) return;
    
    this.auth.getAuthState().subscribe((user) =>
    {
      this.user = user;
      this._security.setLoggedIn(this.user);
      this._security.setUser(this.user);
    });
  }

  public isLoggedIn() {
    return this._security.isLoggedIn();
  }

  public signOut() {
    this._security.signOut();
  }

}
