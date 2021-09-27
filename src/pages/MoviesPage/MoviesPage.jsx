import s from './Movies.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieBySearch } from '../../utils/fetchMovie';
import { useHistory, useLocation } from 'react-router-dom';

import MovieCard from '../../components/MovieCard/MovieCard';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const searchWord = new URLSearchParams(location.search).get('query');

  const handleQueryValue = e => {
    setQuery(e.target.value);
  };

  const submitBtn = () => {
    if (query) {
      fetchMovieBySearch(query).then(res => setMovie(res.results));
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  };

  useEffect(() => {
    if (!searchWord) {
      return;
    }
    fetchMovieBySearch(searchWord).then(res => setMovie(res.results));
    setQuery(searchWord);
  }, [searchWord]);

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        name="searchQuery"
        autoComplete="off"
        onChange={handleQueryValue}
        value={query}
      />
      <button type="submit" onClick={submitBtn}>
        Search
      </button>
      <MovieCard movies={movie} location={location}></MovieCard>
    </div>
  );
}
