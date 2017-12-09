import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {IndexComponent} from "./index.component";

export const MenuRoutes: Routes = [
    {
        path: 'Index',
        component: LayoutComponent,
        children: [
            { path: '', component: IndexComponent}
        ]
    }
]
