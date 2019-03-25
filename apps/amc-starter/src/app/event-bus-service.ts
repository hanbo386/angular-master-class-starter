import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable()
export class EventBusService {
  private announcer = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this.announcer.next({
      type: eventType,
      data: data
    });
  }

  observe(eventType: string): Observable<string> {
    const isRequestedEvent = (event) => event.type === eventType;
    const getTitle = (event) => event.data;
    const events$ = this.announcer.asObservable();

    return events$.pipe(
      filter(isRequestedEvent),
      map(getTitle)
    );
  }
}
