import { Link } from 'react-router-dom';
import s from './MovieCard.module.css';

export default function MovieCard({ movies, location }) {
  const URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul className={s.wrapper}>
      {movies &&
        movies.map(item => (
          <li key={item.id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${item.id}`,
                state: { from: location },
              }}
            >
              <img src={`${URL}/${item.poster_path}`} alt={item.title} width="200px" />
              <span className={s.title}> {item.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
