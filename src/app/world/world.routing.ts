import { MainMenuComponent } from './../layout/main-menu/main-menu.component';
import { LayoutComponent } from './../layout/layout.component';
import { Routes } from "@angular/router";
import { WorldComponent } from "./world.component";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

const worldRoutes: Routes = [
    {
        path: 'World',
        component: LayoutComponent,
        children: [
            {path: '', component: WorldComponent}
        ]
    }
]

export const worldRouting: ModuleWithProviders = RouterModule.forChild(worldRoutes);