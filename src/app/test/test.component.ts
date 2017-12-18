import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test',
  template: `
      <div class="grid">
        <div class="cell medium-12">
          Testing

          <ul>
          <li (click)='generateCharacters()'>
          Generate characters
          </li>

          <li (click)='clearAllCharacters()'>
          Clear characters
          </li>

          </ul>
        </div>
      </div>
  `,
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {

  constructor(private _angularFireBase: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  public generateCharacters() {
    // Generate 50 characters

    //this._angularFireBase.object('/Characters/')

  }

  public clearAllCharacters() {
    // Clear character db
  }


}
