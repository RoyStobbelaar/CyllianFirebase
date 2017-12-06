import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterContainerComponent } from './character-container/character-container.component';
import {NgModule} from '@angular/core';
import { UiComponentsModule } from "../ui-components/ui-components.module";
import { RouterModule } from '@angular/router';
import { characterRouting } from './character.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterService } from '../services/character.service';

@NgModule({
    imports: [
        UiComponentsModule,
        BrowserModule,
        characterRouting
        // RouterModule.forChild(characterRoutes)
    ],
    declarations: [
        CharacterContainerComponent,
        CharacterViewComponent
    ],
    providers: [CharacterService]
})

export class CharacterModule{

}