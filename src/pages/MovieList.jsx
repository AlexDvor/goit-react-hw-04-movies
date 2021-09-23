import fetchMovie from '../utils/fetchMovie';
import { useState, useEffect } from 'react';

export default function MovieList() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovie().then(res => setMovie(res.results));
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {movie.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
