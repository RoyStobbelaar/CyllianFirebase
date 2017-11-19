import {Component} from '@angular/core';

@Component({
  selector: 'menu-item',
  template: `
  <li class="menu-item">
    <a>
      <ng-content></ng-content>
    </a>
  </li>
  `,
  styleUrls: ['./main-menu-item.component.scss']
})

export class MainMenuItemComponent {


  constructor(){

  }

}
