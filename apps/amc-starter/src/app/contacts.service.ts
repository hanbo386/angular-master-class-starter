import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts() {
    return CONTACT_DATA;
  }
}
