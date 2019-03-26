import { EventBusService } from './event-bus-service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsNgRxModule } from './contacts-ngrx.module';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { API_ENDPOINT } from './app.token';
import { FormsModule } from '@angular/forms';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ConfirmDeactivateDialogComponent } from './confirm-deactivate-dialog/confirm-deactivate-dialog.component';
import { CanDeactiveContactsEditorGuard } from './CanDeactiveContactsEditorGuard';
import { ContactsResolver } from './shared/contacts.resolver';

// export function confirmNavigationGuard(component) {
//    const question = 'Navigate away without saving?';
//    return !component.warnOnClosing || window.confirm(question);
// }

@NgModule({
   declarations: [
      ContactsAppComponent,
      ContactsListComponent,
      ContactsDetailComponent,
      ContactsEditorComponent,
      ContactsCreatorComponent,
      EmailValidatorDirective,
      ContactsDetailViewComponent,
      TabComponent,
      TabsComponent,
      ContactsDashboardComponent,
      AboutComponent,
      ConfirmDeactivateDialogComponent,
   ],
   entryComponents: [ConfirmDeactivateDialogComponent],
   providers: [
      { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' },
      // { provide: 'ConfirmNavigationGuard', useValue: confirmNavigationGuard },
      ContactsService,
      EventBusService,
      CanDeactiveContactsEditorGuard,
      ContactsResolver
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ContactsMaterialModule,
      ContactsNgRxModule,
      FlexLayoutModule,
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
      FormsModule
   ],
   bootstrap: [
      ContactsAppComponent
   ]
})
export class ContactsModule {}
