import { AngularFireDatabase } from 'angularfire2/database';
import {Component, OnInit} from '@angular/core';
import {Character} from "../Logic/Models/character";
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'character-container',
  template: `    
    <div class="container" *ngIf="!loading">
      <div class="grid-x">
        <div class="cell medium-4 spacing"  *ngFor="let character of characters">
          <character-view [character]="character"></character-view>
        </div>
      </div>
    </div>
    <div *ngIf="loading" style="width: 100vw">
    <h2> Loading... </h2>
    </div>
  `,
  styleUrls: ['./character-container.component.scss']
})

export class CharacterContainerComponent implements OnInit {

  public characters: Character[];
  public loading: boolean;

  constructor(private _characterService: CharacterService, private db: AngularFireDatabase) {
  }

  ngOnInit() {

    this.loading = true;

    this.db.list('/Characters').valueChanges().subscribe(res => {
      this.characters = <Character[]>res;
      console.log(this.characters);
      this.loading = false;
    })

    // this._characterService.getCharacters().subscribe(result => {
    //   this.characters = result;
    //   this.loading = false;
    // }, err => {
    //   this.loading = false;
    // })
  }
}
