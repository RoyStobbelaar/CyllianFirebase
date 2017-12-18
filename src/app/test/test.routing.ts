import { MainMenuComponent } from './../layout/main-menu/main-menu.component';
import { LayoutComponent } from './../layout/layout.component';
import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const testRoutes: Routes = [
    {
        path: 'Test',
        component: LayoutComponent,
        children: [
            {path: '', component: TestComponent}
        ]
    }
];

export const testRouting: ModuleWithProviders = RouterModule.forChild(testRoutes);
