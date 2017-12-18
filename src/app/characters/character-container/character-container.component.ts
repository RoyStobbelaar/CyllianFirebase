import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {Component, OnInit} from '@angular/core';
import {Character} from '../../Logic/Models/character';
import {CharacterService} from '../../services/character.service';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'character-container',
  template: `
  <div (click)='addNew()'>
  ++ Add new char
  </div>
      <div class="grid-x" *ngIf='!loading'>
        <div class="character-view cell large-3 medium-6"  *ngFor="let character of characters">
          <character-view [character]="character"></character-view>
        </div>
      </div>
      <div *ngIf='loading'>
      Loading...
    </div>
  `,
  styleUrls: ['./character-container.component.scss']
})

export class CharacterContainerComponent implements OnInit {

  public characters: Character[];
  public loading: boolean;
  public charList: any;

  constructor(private _characterService: CharacterService,
    private db: AngularFireDatabase) {
  }

  ngOnInit() {

    this.loading = true;

    this.charList = this.db.list<Character>('Characters');
    const chars: Observable<Character[]> = this.charList.valueChanges();

    chars.subscribe(res => {
      this.characters = res;
      console.log(this.characters);
      this.loading = false;
    });

    console.log(chars);
  }

  public addNew() {
    let newChar = new Character;
    newChar.description = 'Test char';
    newChar.gender = 'Male';
    newChar.name = 'Rysano';
    newChar.portrait = '../assets/images/portraits/portrait_4.png';
    newChar.race = 'Elf';
    newChar.subclass = 'Priest';

    this.charList.push(newChar);
  }
}
