import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  useEffect(() => {
    dispatch(fetchContacts());
    // .unwrap() // додаткові повідомлення про успіх або помилку
    // .then(() => alert('Succes'))
    // .catch(() => alert('Error fetching contacts'));
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length !== 0 && <ContactList />}
      </div>
    </>
  );
}

export default App;
