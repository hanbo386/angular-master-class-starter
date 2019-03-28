import { FEATURE_KEY, ContactsState } from './state/contacts/contacts.reducer';

export interface ApplicationState {
    [FEATURE_KEY]: ContactsState;
}
