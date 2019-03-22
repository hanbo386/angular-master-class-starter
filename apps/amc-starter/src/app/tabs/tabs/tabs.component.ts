import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  private tabs: Array<TabComponent> = [];

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }
  constructor() { }

}
