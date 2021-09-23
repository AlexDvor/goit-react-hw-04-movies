import s from './Movies.module.css';
import { useState } from 'react';
import { fetchMovieBySearch } from '../../utils/fetchMovie';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  const handleQueryValue = e => {
    setQuery(e.target.value);
  };

  const submitBtn = () => {
    fetchMovieBySearch(query).then(res => setMovie(res.results));
  };

  return (
    <div className={s.wrapper}>
      <input type="text" name="searchQuery" autoComplete="off" onChange={handleQueryValue} />
      <button type="submit" onClick={submitBtn}>
        Search
      </button>

      <ul>{movie && movie.map(item => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
}
