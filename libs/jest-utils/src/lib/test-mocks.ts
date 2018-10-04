import { NEVER, Observable } from 'rxjs';

/**
 * No-op implementations of services which can be used for TestBed providers definitions
 */
export namespace TestMocks {
  export class ContactsService {
    getAllContacts = () => NEVER as Observable<any[]>; // tslint:disable-line:no-any
  }
}
