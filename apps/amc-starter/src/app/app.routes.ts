import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      {path: '', redirectTo: 'contact/0', pathMatch: 'full'},
      {path: 'contact/new', component: ContactsCreatorComponent},
      {path: 'contact/:id', component: ContactsDetailViewComponent},
      {
        path: 'contact/:id/edit', 
        component: ContactsEditorComponent,
        canDeactivate: ['ConfirmNavigationGuard']
      }
    ]
  },
  {path: 'about', component: AboutComponent}
];
