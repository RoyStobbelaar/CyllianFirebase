import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Character} from '../Logic/Models/character';
import 'rxjs/add/observable/of';

@Injectable()
export class CharacterService {

  public characters: Character[];

  constructor(public db: AngularFireDatabase) {

  }

  public getCharacters(): Observable<any[]> {

    return this.db.list('/Characters').valueChanges();

    //this.characters = this.db.list('/Characters', {query: query});
    //return Observable.of(this.characters);

    //return Observable.of(this.characters);
  }

  public getCharacter(id: number): Observable<Character> {
    return Observable.create(this.characters[id]);
  }
}
