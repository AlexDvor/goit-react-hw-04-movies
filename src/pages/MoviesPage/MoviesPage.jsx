import s from './Movies.module.css';
import { useState } from 'react';
import { fetchMovieBySearch } from '../../utils/fetchMovie';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

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

  return (
    <div className={s.wrapper}>
      <input type="text" name="searchQuery" autoComplete="off" onChange={handleQueryValue} />
      <button type="submit" onClick={submitBtn}>
        Search
      </button>

      <ul>
        {movie &&
          movie.map(item => (
            <li key={item.id}>
              <Link to={`${url}/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
