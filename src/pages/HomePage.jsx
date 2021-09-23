import fetchMovie from '../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movie, setMovie] = useState([]);
  // const { url } = useRouteMatch();
  // console.log(url);

  useEffect(() => {
    fetchMovie().then(res => setMovie(res.results));
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {movie &&
          movie.map(item => (
            <li key={item.id}>
              <Link to={`/movie/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
