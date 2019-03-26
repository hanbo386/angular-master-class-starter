
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {
    constructor(private contactsService: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.contactsService.getContact(route.params['id']);
    }
}
