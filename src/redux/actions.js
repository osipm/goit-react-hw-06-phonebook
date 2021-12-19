import { v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = (name, number) => ({
  type: 'addContact',
  payload: { name, number, id: v4() },
});

export const getFilteredContacts = contacts => ({
  type: 'getFilteredContacts',
  payload: contacts,
});

export const handleDeleteContact = contactId => ({
  type: 'delete',
  payload: contactId,
});

export const filter = createAction('filter');

// export const filter = value => ({
//   type: 'filter',
//   payload: value,
// });
