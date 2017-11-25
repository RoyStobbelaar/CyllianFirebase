import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuService} from "../services/menu.service";

@Component({
    selector: 'menu',
    styleUrls: ['./main-menu.component.scss'],
    templateUrl: './main-menu.component.html'
})

export class MainMenuComponent implements OnInit {

    public menuItems = [];

    constructor(private _router: Router, private _menuService: MenuService){

    }

    ngOnInit(): void {
        //Fill menuItems
      this.getMenuItems();
    }

    public getMenuItems() {
      // this._menuService.getMenuItems().subscribe(res => {
      //   this.menuItems = res;
      //   console.log(this.menuItems);
      // });
      this.menuItems = ['Index','World','Characters','Game'];
    }

    public navigate(path: string) {
      this._router.navigate([path]);
    }
}
