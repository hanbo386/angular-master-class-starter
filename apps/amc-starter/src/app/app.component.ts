import { Component } from '@angular/core';
import { EventBusService } from './event-bus-service';

@Component({
  selector: 'trm-contacts-app',
  providers: [EventBusService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
    constructor(private eventbus: EventBusService) {}
    title$ = this.eventbus.observe('appTitleChange');
}
