import { fetchMovie } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovie().then(res => setMovie(res.results));
  }, []);

  console.log(movies);
  return (
    <>
      <h2>Trending Today</h2>
      <MovieCard movies={movies} location={location}></MovieCard>
    </>
  );
}
