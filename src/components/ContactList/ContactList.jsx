import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const listIteams = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  // Фільтруємо контакти за фільтром
  const visibleListIteams = listIteams.filter((listIteam) =>
    listIteam.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul className={css.contactList}>
      {visibleListIteams.map((listIteam) => {
        return (
          <li className={css.listIteam} key={listIteam.id}>
            <Contact listIteam={listIteam} />
          </li>
        );
      })}
    </ul>
  );
}
