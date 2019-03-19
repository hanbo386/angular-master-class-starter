import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact = this.contactsService.getContact(this.route.snapshot.paramMap.get('id'));
  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
