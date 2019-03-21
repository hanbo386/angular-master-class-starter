import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

export const APP_ROUTES: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/new', component: ContactsCreatorComponent},
  {path: 'contact/:id', component: ContactsDetailComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent}
];
