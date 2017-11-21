import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterContainerComponent} from "./character-container/character-container.component";
import {IndexComponent} from "./index/index.component";
import {LoginGuardComponent} from "./Logic/Guards/login-guard.component";

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'characters', component: CharacterContainerComponent, canActivate: [LoginGuardComponent] },
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
