// import { useState, useMemo } from 'react';
// import { useEffect } from 'react';
// import { useDebounce } from 'use-debounce';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  // const [inputValue, setInputValue] = useState('');
  // const [debouncedContacts] = useDebounce(inputValue, 1000);

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(debouncedContacts.toLowerCase()),
  //   );
  // }, [debouncedContacts, contacts]);

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
