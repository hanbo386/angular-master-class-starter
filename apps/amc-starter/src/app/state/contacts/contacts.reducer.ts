import { ContactsActions, ContactsActionTypes } from './contacts.actions';
import { Contact } from './../../models/contact';

export const FEATURE_KEY = 'contacts';
export interface ContactsState {
    list: Array<Contact>;
    selectedContactId: number | null;
}
export const INITIAL_STATE: ContactsState = {
    list: [],
    selectedContactId: null
};

export function contactsReducer(state: ContactsState = INITIAL_STATE, action: ContactsActions) {
    switch (action.type) {
        case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
            return {
                ...state,
                list: action.payload
            };
        case ContactsActionTypes.SELECT_CONTACT:
            return {
                ...state,
                selectedContactId: action.payload
            };
        case ContactsActionTypes.UPDATE_CONTACT:
            const hasSameId = contact => contact.id === action.payload.id;
            const updatedList = state.list.map(contact => {
                return hasSameId(contact) ? { ...contact, ...action.payload } : contact;
            });
            return {
                ...state,
                list: updatedList
            };
        default:
            return state;
    }
}
