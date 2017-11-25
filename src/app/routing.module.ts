import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterContainerComponent} from "./character-container/character-container.component";
import {IndexComponent} from "./index/index.component";
import {LoginGuardComponent} from "./Logic/Guards/login-guard.component";
import {LoginComponent} from "./login/login.component";
import {WorldComponent} from "./world/world.component";

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Index', component: IndexComponent, canActivate: [LoginGuardComponent] },
  { path: 'Characters', component: CharacterContainerComponent, canActivate: [LoginGuardComponent] },
  { path: 'World', component: WorldComponent, canActivate: [LoginGuardComponent] }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
