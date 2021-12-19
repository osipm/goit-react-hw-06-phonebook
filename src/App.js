// import { useState, useEffect } from 'react';
// import { v4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // console.log(contacts);
  // useEffect(() => {
  //   const lsContacts = localStorage.getItem('contacts');

  //   if (lsContacts) {
  //     setContacts(JSON.parse(lsContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {

  //   setContacts(prevContacts => {
  //     if (prevContacts.find(contact => contact.name === name)) {
  //       alert(`${name} is already in the contacts`);
  //       return prevContacts;
  //     }

  //     return prevContacts.concat({
  //       name,
  //       number,
  //       id: v4(),
  //     });
  //   });
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
