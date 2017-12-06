import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MainMenuComponent } from './../layout/main-menu/main-menu.component';
import { CharacterContainerComponent } from './character-container/character-container.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const characterRoutes: Routes = [

    {
        path: 'Characters',
        component: LayoutComponent,
        children: [
            {path: '', component: CharacterContainerComponent}
        ]
    }

]

export const characterRouting: ModuleWithProviders = RouterModule.forChild(characterRoutes);