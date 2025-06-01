import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const listItems = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  // Фільтруємо контакти за фільтром
  const visibleListIteams = listItems.filter((listItem) =>
    listItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul className={css.contactList}>
      {visibleListIteams.map((listItem) => {
        return (
          <li className={css.listItem} key={listItem.id}>
            <Contact listItem={listItem} />
          </li>
        );
      })}
    </ul>
  );
}
