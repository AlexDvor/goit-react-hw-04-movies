import { fetchMovie } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovie().then(res => setMovie(res.results));
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
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
    </>
  );
}
