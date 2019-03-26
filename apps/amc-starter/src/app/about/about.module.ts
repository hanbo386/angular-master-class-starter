import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsMaterialModule } from '../contacts-material.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: AboutComponent }
        ]),
        FlexLayoutModule,
        ContactsMaterialModule
    ],
    declarations: [AboutComponent]
})
export class AboutModule {
}
