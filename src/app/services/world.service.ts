import { WorldItem } from './../Logic/Models/world-item';
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WorldService {


  constructor(public db: AngularFireDatabase) {

  }

  public getWorldItems(): Observable<any[]> {
    return this.db.list('/World').valueChanges();
  }


}
