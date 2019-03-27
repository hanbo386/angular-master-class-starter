import { ContactsActions, ContactsActionTypes } from './contacts.actions';
import { Contact } from './../../models/contact';

export const FEATURE_KEY = 'contacts';
export interface ContactsState {
    list: Array<Contact>;
}
export const INITIAL_STATE: ContactsState = {
    list: []
};

export function contactsReducer(state: ContactsState = INITIAL_STATE, action: ContactsActions) {
    switch (action.type) {
        case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}
