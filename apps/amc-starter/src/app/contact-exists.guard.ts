import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApplicationState } from './app.state';
import { Contact } from './models/contact';
import { AddContactAction, SelectContactAction } from './state/contacts/contacts.actions';
import { tap, map, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactExistsGuard implements CanActivate {
    constructor(public store: Store<ApplicationState>, private contactsService: ContactsService) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const contactId = route.paramMap.get('id');
        const addContactToList = (contact: Contact) => {
            this.store.dispatch(new AddContactAction(contact));
        };
        const loadContactByID = () => {
            return this.contactsService.getContact(contactId).pipe(
                tap(addContactToList),
                map(contact => !!contact)
            );
        };

        this.store.dispatch(new SelectContactAction(+contactId));
        return this.store.pipe(
            select(state => state.contacts.loaded),
            take(1),
            switchMap(loaded => loaded ? of(true) : loadContactByID())
        );
    }

}