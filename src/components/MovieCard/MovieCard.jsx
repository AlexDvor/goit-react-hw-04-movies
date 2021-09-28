import { Link } from 'react-router-dom';
import s from './MovieCard.module.css';
import PropTypes from 'prop-types';

export default function MovieCard({ movies, location }) {
  const URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul className={s.wrapper}>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <li key={id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {poster_path && <img src={`${URL}/${poster_path}`} alt={title} width="200px" />}
              <span className={s.title}> {title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};
