import { fetchMovieByCast } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './CastPage.module.css';

export default function Cast() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();

  console.log(movieData);

  useEffect(() => {
    fetchMovieByCast(movieId).then(res => setMovieData(res.cast));
  }, [movieId]);

  const URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className={s.wrapper}>
      {movieData &&
        movieData.map(item => (
          <li key={item.id} className={s.item}>
            {item.profile_path ? (
              <img src={`${URL}/${item.profile_path}`} alt={item.name} width="100px" />
            ) : (
              <img
                src="https://img.icons8.com/ios/100/000000/user-male-circle.png"
                alt={item.name}
                width="100px"
              />
            )}
            <h4> {item.name}</h4>
            <p>Character{item.character}</p>
          </li>
        ))}
    </ul>
  );
}
