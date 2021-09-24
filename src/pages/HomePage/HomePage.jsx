import { fetchMovie } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  // const { url } = useRouteMatch();
  // console.log(url);
  console.log(movies);

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
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
