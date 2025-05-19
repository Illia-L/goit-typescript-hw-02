import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import React, { FormEvent, JSX } from 'react';
import { Search } from '../../App.types';

type Props = {
  onSubmit: (search: Search) => void;
};

function SearchBar({ onSubmit }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const searchInput = (e.target as HTMLFormElement).elements.namedItem(
      'search'
    ) as HTMLInputElement;
    const search = searchInput.value;

    if (search) return onSubmit(search);

    toast.error('Text required to search for images.');
  }

  return (
    <header className={css.header}>
      <form
        className={css.form}
        onSubmit={handleSubmit}
      >
        <input
          className={css.input}
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          name='search'
        />
        <button
          className={css.button}
          type='submit'
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
