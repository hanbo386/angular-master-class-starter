import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactsMaterialModule} from '../../../amc-starter/src/app/contacts-material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './voter/dashboard.component';
import { StatusComponent } from './voter/status.component';
import {VoterStore} from './voter/store/voter-store';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  imports: [
      BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VoterComponent,
    StatusComponent
  ],
  providers: [VoterStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
