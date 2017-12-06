import { MenuRoutes } from './layout.routing';
import { MainMenuItemComponent } from './main-menu/menu-item/main-menu-item.component';
import { RouterModule } from '@angular/router';
import { CharacterModule } from './../characters/character.module';
import { WorldModule } from './../world/world.module';
import {NgModule} from '@angular/core';
import { UiComponentsModule } from "../ui-components/ui-components.module";
import { CommonModule } from '@angular/common/src/common_module';
import { GameModule } from '../game/game.module';
import { LayoutComponent } from './layout.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuService } from '../services/menu.service';

@NgModule({
    imports: [
        UiComponentsModule,
        WorldModule,
        CharacterModule,
        BrowserModule,
        //RouterModule,
        RouterModule.forChild(MenuRoutes),
        GameModule
    ],
    declarations: [
        LayoutComponent,
        MainMenuComponent,
        MainMenuItemComponent
    ],
    providers: [MainMenuComponent, MenuService],
    bootstrap: [MainMenuComponent]
})

export class LayoutModule {

}