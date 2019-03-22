import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact: Contact;
  @Output() back = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Contact>();
  // contact: Contact;
  //
  // constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }
  //
  // ngOnInit() {
  //   this.contactsService
  //       .getContact(this.route.snapshot.paramMap.get('id'))
  //       .subscribe(contact => this.contact = contact);
  // }

}
