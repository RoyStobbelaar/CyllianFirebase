import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'world',
  template: `
    
    <container [loading]="loading">
      <div class="grid">
        <div class="cell medium-12">
          World building here
        </div>
      </div>
    </container>
    
  `,
  styleUrls: ['./world.component.scss']
})

export class WorldComponent implements OnInit {

  public worldItemList: string[];
  public loading: boolean;

  constructor() {

  }

  ngOnInit() {

    this.loading = false;
  }

}
