import s from './Movies.module.css';
import { useState } from 'react';

export default function Movies() {
  const [query, setQuery] = useState('');

  const handleQueryValue = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <input type="text" name="searchQuery" autoComplete="off" onChange={handleQueryValue} />
      <button type="submit">Search</button>
    </div>
  );
}
