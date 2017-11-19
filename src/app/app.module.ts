import { RoutingModule } from './routing.module';
import { CharacterService } from './services/character.service';
import { IndexComponent } from './index/index.component';
import { CharacterContainerComponent } from './character-container/character-container.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { MainMenuItemComponent } from './main-menu/menu-item/main-menu-item.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header-component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
//import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    //AppComponent,
    LayoutComponent,
    ContentContainerComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    CharacterViewComponent,
    CharacterContainerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'cyllianfirebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,
    CharacterService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
