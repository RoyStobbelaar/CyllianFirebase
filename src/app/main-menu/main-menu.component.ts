import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'menu',
    styleUrls: ['./main-menu.component.scss'],
    templateUrl: './main-menu.component.html'
})

export class MainMenuComponent implements OnInit {

    public menuItems = [];

    constructor(private _router: Router){

    }

    ngOnInit(): void {
        //Fill menuItems
        this.menuItems = [
            'Home',
            'Characters',
            'Stuff',
            'Game'
        ]
    }

    public navigate(path: string) {
      this._router.navigate([path]);
    }
}
