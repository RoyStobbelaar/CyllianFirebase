import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

  user = null;
  topics: Observable<any>;  

  constructor(
    private auth: AuthService,
  public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
      this.topics = this.db.list('/Characters').valueChanges();  
      
      this.topics.subscribe(res => {
        console.log(res);
      })
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
