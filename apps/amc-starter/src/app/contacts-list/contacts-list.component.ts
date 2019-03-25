import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { merge, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventBusService } from '../event-bus-service';

@Component({
  selector: 'trm-contacts-list',
  // providers: [
  //   ContactsService,
  // ],
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private terms$ = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private  contactsService: ContactsService, private publisher: EventBusService) {}
  ngOnInit() {

    this.contacts$ = merge(
      this.contactsService.search(this.terms$),
      this.contactsService.getContacts()
    );
    // .pipe(tap(list => this.publisher.emit('appTitleChange', `${list.length} Contacts`)));
  }
}
