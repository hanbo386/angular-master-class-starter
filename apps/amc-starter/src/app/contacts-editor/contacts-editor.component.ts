import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { ApplicationState } from '../app.state';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SelectContactAction, UpdateContactAction } from '../state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact$: Observable<Contact> = this.store.pipe(
    select(state => {
      const id = state.contacts.selectedContactId;
      console.log(state);
      return state.contacts.list.find(contact => contact.id === id);
    }),
    map(contact => ({...contact}))
  );
  warnOnClosing = true;

  constructor(
    private router: Router, 
    private contactsService: ContactsService, 
    private route: ActivatedRoute,
    private store: Store<ApplicationState>) { }
  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));
    console.log(this.store);
    // this.contactsService
    //   .getContact(this.route.snapshot.paramMap.get('id'))
    //   .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }
  save(contact: Contact) {
    // this.contactsService.updateContact(contact).subscribe(() => this.goToDetails(contact));
    this.contactsService
        .updateContact(contact)
        .subscribe(() => {
          this.store.dispatch(new UpdateContactAction(contact));
          this.goToDetails(contact);
        });
  }
  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

}
