import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuService} from "../../services/menu.service";
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'menu',
    styleUrls: ['./main-menu.component.scss'],
    templateUrl: './main-menu.component.html'
})

export class MainMenuComponent implements OnInit {

    public menuItems = [];
    public title: string;
    public subTitle: string;
    public menuOpen: boolean;

    @ViewChild('menu')menu: ElementRef;

    constructor(private _router: Router, private _menu: MenuService){
      console.log('load menu');
    }

    ngOnInit(): void {
      this.menuOpen = this._menu.showMenu;
      if(this.menuOpen) this.menu.nativeElement.classList.add('open');

        //Fill menuItems
                //Set defaults
                this.title = 'Cyllian RPG';
                this.subTitle = 'Awakening of the Ancients';
      this.getMenuItems();
    }

    public getMenuItems() {
      this.menuItems = ['Index','World','Characters','Game'];
    }

    public enter() {
      this.menu.nativeElement.classList.add('open')
      this._menu.openMenu();
      this.menuOpen = true;      
    }

    public leave() {
      this.menu.nativeElement.classList.remove('open')
      this._menu.closeMenu();
      this.menuOpen = false;            
    }

    public navigate(path: string) {
      this._router.navigateByUrl(path);
    }
}
