import { v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('addContact', (name, number) => {
  return { payload: { name, number, id: v4() } };
});
export const handleDeleteContact = createAction('delete');
export const filter = createAction('filter');
