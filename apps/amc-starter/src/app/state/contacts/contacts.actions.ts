import { Contact } from './../../models/contact';
import { Action } from '@ngrx/store';

export enum ContactsActionTypes {
    LOAD_CONTACTS_SUCCESS = '[Contacts] Load Contacts Success'
}

export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
    constructor(public payload: Array<Contact>) {}
}

export type ContactsActions = LoadContactsSuccessAction;
