

import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WorldService {


  constructor(public db: AngularFireDatabase) {

  }

  public getWorldItems(): Observable<WorldItem[]> {
    return this.db.list('/World').valueChanges();
  }


}
