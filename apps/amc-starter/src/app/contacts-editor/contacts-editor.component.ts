import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{address: {}};

  constructor(private router: Router, private contactsService: ContactsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.contactsService
      .getContact(this.route.snapshot.paramMap.get('id'))
      .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }
  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe(() => this.goToDetails(contact));
  }
  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

}
