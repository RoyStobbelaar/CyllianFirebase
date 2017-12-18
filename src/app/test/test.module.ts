import { UiComponentsModule } from './../ui-components/ui-components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { testRouting } from './test.routing';

@NgModule({
    imports: [
        UiComponentsModule,
        testRouting
    ],
    declarations: [
        TestComponent
    ]
})

export class TestModule {}
