import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBusService } from '../event-bus-service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact = <Contact>{ address: {} };

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private publisher: EventBusService
  ) { }

  ngOnInit() {
    // We need to subscribe to params changes because this component is
    // reused when jumpling between contacts. Hence ngOnInit is called only once
    // this.route.paramMap
    //   .pipe(switchMap(paramMap => this.contactsService.getContact(paramMap.get('id'))))
    //   .subscribe(contact => { this.contact = contact; this.publisher.emit('appTitleChange', `${this.contact.name}`); });
    this.route.data
      .pipe(map(data => data['contact']))
      .subscribe(contact => { this.contact = contact;  this.publisher.emit('appTitleChange', `${this.contact.name}`); });
    // console.log('Inited detail page');
    // this.contactsService
    //     .getContact(this.route.snapshot.params['id'])
    //     .subscribe(contact => this.contact = contact);
    // this.publisher.emit('appTitleChange', `${this.contact.name}`);
  }

  // navigateToList() {
  //   this.router.navigate(['/']);
  // }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }

}
