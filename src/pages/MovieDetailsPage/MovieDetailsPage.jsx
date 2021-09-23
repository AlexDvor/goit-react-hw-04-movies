import { useParams } from 'react-router';
import { fetchMovieByID } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(res => setMovieData(res));
  }, [movieId]);

  const { title, poster_path } = movieData;
  const URL = 'https://image.tmdb.org/t/p/w200';
  //   console.log(poster_path);
  return (
    <>
      <p>Detail Page {movieId}</p>
      <h2>{title}</h2>
      <img src={`${URL}/${poster_path}`} alt={title} width="200px" />
    </>
  );
}
