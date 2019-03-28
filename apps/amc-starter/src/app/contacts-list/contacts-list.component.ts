import { ApplicationState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { merge, Observable, Subject } from 'rxjs';
import { EventBusService } from '../event-bus-service';
import { Store, select } from '@ngrx/store';
import { LoadContactsSuccessAction } from '../state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private terms$ = new Subject<string>();
  contacts$: Observable<Array<Contact>> = this.store.pipe(
    select(state => state.contacts.list)
  );

  constructor(private store: Store<ApplicationState>, private contactsService: ContactsService, private publisher: EventBusService) {}
  ngOnInit() {

    merge(
      this.contactsService.search(this.terms$),
      this.contactsService.getContacts()
    ).subscribe(contacts => {
      this.store.dispatch(new LoadContactsSuccessAction(contacts));
    });
    // .pipe(tap(list => this.publisher.emit('appTitleChange', `${list.length} Contacts`)));
  }
}
