import { Link } from 'react-router-dom';

export default function MovieCard({ movies, location }) {
  return (
    <ul>
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${item.id}`,
                state: { from: location },
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
