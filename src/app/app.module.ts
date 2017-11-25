import {RoutingModule} from './routing.module';
import {CharacterService} from './services/character.service';
import {IndexComponent} from './index/index.component';
import {CharacterContainerComponent} from './character-container/character-container.component';
import {CharacterViewComponent} from './character-view/character-view.component';
import {MainMenuItemComponent} from './main-menu/menu-item/main-menu-item.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {HeaderComponent} from './header/header-component';
import {LayoutComponent} from './layout/layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AuthService} from './shared/auth.service';
import {SecurityService} from "./services/security.service";
import {LoginGuardComponent} from "./Logic/Guards/login-guard.component";
import {AuthenticUserDirective} from "./Logic/Directives/authenticUser.directive";
import {MenuService} from "./services/menu.service";
import {LoginComponent} from "./login/login.component";
import {WorldComponent} from "./world/world.component";
import {WorldItemComponent} from "./world/world-item/world-item.component";
import {Container} from "./ui-components/content-container/content-container.component";

@NgModule({
  declarations: [
    Container,
    LayoutComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    CharacterViewComponent,
    CharacterContainerComponent,
    IndexComponent,
    AuthenticUserDirective,
    LoginComponent,
    WorldComponent,
    WorldItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    AuthenticUserDirective
  ],
  providers: [
    AuthService,
    CharacterService,
    SecurityService,
    LoginGuardComponent,
    MenuService
  ],
  bootstrap: [
    LayoutComponent
  ]
})

export class AppModule {
}
