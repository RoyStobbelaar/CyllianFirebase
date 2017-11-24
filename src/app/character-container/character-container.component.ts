import { AngularFireDatabase } from 'angularfire2/database';
import {Component, OnInit} from '@angular/core';
import {Character} from "../Logic/Models/character";
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'character-container',
  template: `    
    <div class="container" *ngIf="!loading">
      <div class="grid-x">
        <div class="cell large-4 medium-12 spacing"  *ngFor="let character of characters">
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

    this._characterService.getCharacters().subscribe(result => {
      this.characters = <Character[]>result;
      this.loading = false;
    });
  }
}
