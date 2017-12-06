import { MainMenuComponent } from './../layout/main-menu/main-menu.component';
import { GameComponent } from './game.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ModuleWithProviders } from '@angular/core';



const gameRoutes: Routes = [
    {
        path: 'Game',
        component: LayoutComponent,
        children: [
            {path: '', component: GameComponent}
        ]
    }

]

export const gameRouting: ModuleWithProviders = RouterModule.forChild(gameRoutes);