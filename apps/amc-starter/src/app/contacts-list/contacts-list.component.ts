import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private terms$ = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private  contactsService: ContactsService) {
    this.contacts$ = this.contactsService.getContacts();
  }
  ngOnInit() {
    this.terms$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => this.search(term));
  }

  search(term: string) {
    this.contacts$ = this.contactsService.search(term);
  }
}
