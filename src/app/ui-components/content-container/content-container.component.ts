import {Component, Input} from "@angular/core";

@Component({
  selector: 'container',
  template: `

    <div class="container" *ngIf="!loading">
      <!--<div class="grid">-->
        <!--<div class="cell medium-12">-->
          <ng-content></ng-content>
        </div>
      <!--</div>-->
    <!--</div>-->
    <div *ngIf="loading" style="width: 100vw">
      <h2> Loading... </h2>
    </div>

  `,
  styleUrls: ['./content-container.component.scss']
})

export class Container {

  @Input() loading: boolean;

  constructor(){

  }

}
