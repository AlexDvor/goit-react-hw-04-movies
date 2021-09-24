import { useParams, useRouteMatch } from 'react-router';
import { fetchMovieByID } from '../../utils/fetchMovie';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getGenres from '../../utils/getGenres';
import Cast from '../../components/Cast/Cast';
import s from './MovieDetailsPage.module.css';
import { Route } from 'react-router';

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams('');
  const { url } = useRouteMatch();

  useEffect(() => {
    if (movieId) {
      fetchMovieByID(Number(movieId)).then(setMovieData);
    }
  }, [movieId]);

  // console.log(movieData);

  const { title, poster_path, genres, release_date, overview, vote_average } = movieData;
  const URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {movieData && (
        <>
          <div className={s.wrapperContent}>
            <div>
              {poster_path ? (
                <img src={`${URL}/${poster_path}`} alt={title} width="200px" />
              ) : (
                <p>Not Found Image</p>
              )}
            </div>

            <div className={s.wrapperInfo}>
              <h2>
                {title}({release_date && release_date.slice(0, 4)})
              </h2>
              <p>User Score: {vote_average * 10}%</p>

              <h3>Overview</h3>
              <p>{overview}</p>

              <h3>Genres</h3>
              {genres && getGenres(genres)}
            </div>
          </div>
          <h4>Additional information</h4>

          <ul>
            <li className={s.links}>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li className={s.links}>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>

          <Route path={`/movies/:movieId/cast`}>
            <Cast></Cast>
          </Route>

          <Route path={`/movies/:movieId/reviews`}></Route>
        </>
      )}
    </>
  );
}
