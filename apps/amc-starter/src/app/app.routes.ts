import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

export const APP_ROUTES: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/new', component: ContactsCreatorComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent}
];
