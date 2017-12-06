import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { UiComponentsModule } from "../ui-components/ui-components.module";
import { Entity } from './entities/entity';
import { gameRouting } from './game.routing';

@NgModule({
    imports: [
        UiComponentsModule,
        gameRouting,
    ],
    declarations: [
        GameComponent
    ]
})

export class GameModule {

}