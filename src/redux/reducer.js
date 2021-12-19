import { combineReducers } from 'redux';

const contacts = (state = [], { type, payload }) => {
  console.log('www', state);
  console.log('ww...w', ...state);
  switch (type) {
    case 'addContact':
      return [...state, payload];

    case 'getFilteredContacts':
      return state.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );

    case 'delete':
      return state.filter(contac => contac.id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
