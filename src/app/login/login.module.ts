import { SecurityService } from './../services/security.service';
import { UiComponentsModule } from './../ui-components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common/src/common_module';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routing';
import { AuthService } from '../shared/auth.service';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        LayoutModule,
        UiComponentsModule,
        RouterModule.forChild(loginRoutes)
    ],
    providers: [AuthService, SecurityService],
    bootstrap:[LoginComponent]
})

export class LoginModule{

}