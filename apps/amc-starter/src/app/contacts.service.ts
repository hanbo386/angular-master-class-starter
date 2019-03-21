import { Inject, Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from './app.token';

interface ContactResponse {item: Contact}
interface ContactsResponse {items: Contact[]}

@Injectable()
export class ContactsService {

  contacts: Array<Contact>;

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/contacts`).pipe(map(data => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.apiEndpoint}/contacts/${id}`).pipe(map(data => data.item));
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiEndpoint}/contacts/${contact.id}`;
    return this.http.put<ContactResponse>(url, contact).pipe(map(data => data.item));
  }

  rawSearch(term: string): Observable<Array<Contact>> {
    const searchUrl = `${this.apiEndpoint}/search?text=${term}`;
    return this.http.get<ContactsResponse>(searchUrl).pipe(map(data => data.items));
  }

  search(terms: Observable<string>, debounceMs = 400): Observable<Array<Contact>> {
    return terms.pipe(
      debounceTime(debounceMs),
      distinctUntilChanged(),
      switchMap(term => this.rawSearch(<string>term))
    );
  }
}
