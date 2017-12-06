import { UiComponentsModule } from './../ui-components/ui-components.module';
import { worldRouting } from './world.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { WorldComponent } from './world.component';
import { WorldItemComponent } from './world-item/world-item.component';



@NgModule({
    imports: [
        worldRouting,
        UiComponentsModule
    ],
    declarations: [
        WorldComponent,
        WorldItemComponent
    ]
})

export class WorldModule {
    
}