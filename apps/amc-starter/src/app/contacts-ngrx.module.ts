import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [storeFreeze] : [] }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class ContactsNgRxModule {}
