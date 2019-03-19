import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Array<Contact>;

  constructor() {
    this.contacts = [...CONTACT_DATA];
  }

  getContacts() {
    return this.contacts;
  }

  getContact(id: string) {
    return this.contacts.find(contact => contact.id.toString() === id);
  }
}
