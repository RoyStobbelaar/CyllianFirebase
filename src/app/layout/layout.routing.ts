import { MainMenuComponent } from './main-menu/main-menu.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CharacterContainerComponent } from '../characters/character-container/character-container.component';

export const MenuRoutes: Routes = [
    {
        path: 'Index',
        component: LayoutComponent,
        children: [
            { path: '', component: CharacterContainerComponent}
        ]
    }
]