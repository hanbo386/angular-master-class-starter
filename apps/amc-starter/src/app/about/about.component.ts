import { EventBusService } from './../event-bus-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private publisher: EventBusService) { }

  ngOnInit() {
    this.publisher.emit('appTitleChange', 'Contacts');
  }

}
