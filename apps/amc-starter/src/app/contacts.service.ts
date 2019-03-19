import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContactResponse {item: Contact}
interface ContactsResponse {items: Contact[]}

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4201/api';

  contacts: Array<Contact>;

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts`).pipe(map(data => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`).pipe(map(data => data.item));
  }
}
