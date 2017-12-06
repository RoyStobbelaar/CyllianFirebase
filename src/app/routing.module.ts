import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterContainerComponent } from "./characters/character-container/character-container.component";
import { LoginGuardComponent } from "./Logic/Guards/login-guard.component";
import { LoginComponent } from "./login/login.component";
import { WorldComponent } from "./world/world.component";
import { GameComponent } from './game/game.component';
import { PreloadAllModules } from '@angular/router';

// const appRoutes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: AppComponent },
//   { path: 'Characters', component: CharacterContainerComponent, canActivate: [LoginGuardComponent] },
//   { path: 'World', component: WorldComponent, canActivate: [LoginGuardComponent] },
//   { path: 'Game', component: GameComponent, canActivate: [LoginGuardComponent] }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'Characters', loadChildren: 'app/characters/character.module#CharacterModule' },
  { path: 'World', loadChildren: 'app/world/world.module#WorldModule' },
  { path: 'Game', loadChildren: 'app/game/game.module#GameModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class RoutingModule { }
