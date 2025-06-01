import css from './SearchBox.module.css';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [debouncedFilter] = useDebounce(inputValue, 1000);

  const handleFilterChange = (event) => {
    setInputValue(event.target.value);
  };

  // Використовуємо дебаунс для оновлення Redux
  useEffect(() => {
    if (debouncedFilter !== '') {
      dispatch(changeFilter(debouncedFilter));
    }
  }, [debouncedFilter, dispatch]);
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name
        <input
          className={css.inputBox}
          type="text"
          value={inputValue}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
}
