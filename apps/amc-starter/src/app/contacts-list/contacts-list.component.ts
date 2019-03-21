import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { merge, Observable, Subject } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private terms$ = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private  contactsService: ContactsService) {}
  ngOnInit() {

    this.contacts$ = merge(
      this.contactsService.search(this.terms$),
      this.contactsService.getContacts()
    );
  }
}
