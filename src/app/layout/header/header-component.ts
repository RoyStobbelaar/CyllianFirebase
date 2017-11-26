import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    styleUrls: ['./header-component.scss'],
    templateUrl: './header-component.html'
})

export class HeaderComponent implements OnInit {

    public title: string;
    public subTitle: string;

    ngOnInit(): void {

        //Set defaults
        this.title = 'Cyllian RPG';
        this.subTitle = 'Awakening of the Ancients';
    }
}