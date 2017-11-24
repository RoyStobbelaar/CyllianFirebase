import {Injectable} from "@angular/core";

@Injectable()
export class SecurityService {

  private _isLoggedIn: boolean;
  private _user: any;

  constructor() {

  }

  public setLoggedIn(user: any) {
    if (user) {
      this._isLoggedIn = true;
    }
  }

  public isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public setUser(user: any) {
    this._user = user;
  }

  public getUser(): any {
    if (this._user) {
      return this._user;
    }
  }

  public signOut() {
    this._isLoggedIn = false;
    this._user = null;
  }
}

