import { SelectContactAction, LoadContactsSuccessAction } from './../state/contacts/contacts.actions';
import { ApplicationState } from './../app.state';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Store, select } from '@ngrx/store';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {
    constructor(private contactsService: ContactsService, private store: Store<ApplicationState>) {}

    resolve(route: ActivatedRouteSnapshot) {
        let contact_: Contact;
        // this.store.dispatch(new SelectContactAction(+route.params['id']));
        this.store.pipe(
            select(state => {
                const id = state.contacts.selectedContactId;
                return state.contacts.list.find(contact => contact.id === id);
            })
        ).subscribe(contact => contact_ = contact);
        return contact_;
    }
}
