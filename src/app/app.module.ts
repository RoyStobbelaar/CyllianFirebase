import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { Routes, RouterModule } from '@angular/router';
import {RoutingModule} from './routing.module';
import {CharacterService} from './services/character.service';
import {CharacterContainerComponent} from './characters/character-container/character-container.component';
import {CharacterViewComponent} from './characters/character-view/character-view.component';
import {MainMenuItemComponent} from './layout/main-menu/menu-item/main-menu-item.component';
import {MainMenuComponent} from './layout/main-menu/main-menu.component';
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
import {GameComponent} from './game/game.component';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    LoginModule,
    RoutingModule,
    UiComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}