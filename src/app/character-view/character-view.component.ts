import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../Logic/Models/character";

@Component({
  selector: 'character-view',
  template: `
    
    <div class="character-container">
      <div class="character-title">
        {{ character.name }}
      </div>
      
      <div class="character-data">
        <div class="character-race">
          {{ character.race}} {{ character.subclass}}
        </div>
        
        <div class="character-portrait">
          <img [src]=character.portrait />
        </div>
        
        <div class="character-gender"> {{ character.gender }}</div>
        

        <div> {{ character.description }}</div>
        
      </div>
    </div>
  `,
  styleUrls: ['./character-view.component.scss']
})

export class CharacterViewComponent implements OnInit {

  @Input() character: Character;

  constructor() {

  }

  ngOnInit() {
    //Load data
  }

}
