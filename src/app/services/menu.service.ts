import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MenuService {

  public showMenu: boolean;

  public getMenuItems(): Observable<string[]> {
    let list = [
      'Index','World','Characters','Game'
    ];
    return Observable.of(list);
  }

  public openMenu() {
    this.showMenu = true;
  }

  public closeMenu() {
    this.showMenu = false;
  }

  public getMenuState(): boolean {
    return this.showMenu;
  }
}
