import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterContainerComponent} from "./character-container/character-container.component";
import {IndexComponent} from "./index/index.component";

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'characters', component: CharacterContainerComponent },
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
