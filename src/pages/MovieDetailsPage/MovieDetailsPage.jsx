import { lazy, Suspense } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Route } from 'react-router';
import { fetchMovieByID } from '../../utils/fetchMovie';
import getGenres from '../../utils/getGenres';
import s from './MovieDetailsPage.module.css';
import Button from '../../components/Button/Button';

const ReviewsPage = lazy(() => import('../ReviewsPage/ReviewsPage'));
const CastPage = lazy(() => import('../CastPage/CastPage'));

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams('');
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  console.log('location', location);
  console.log('history', history);

  useEffect(() => {
    if (movieId) {
      fetchMovieByID(Number(movieId)).then(setMovieData);
    }
  }, [movieId]);

  const onClickBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  const { title, poster_path, genres, release_date, overview, vote_average } = movieData;
  const URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {movieData && (
        <>
          <Button text="Go Back" onClick={onClickBtn}></Button>
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

          <Suspense fallback={<h1>Loading....</h1>}>
            <Route path={`/movies/:movieId/cast`}>
              <CastPage></CastPage>
            </Route>

            <Route path={`/movies/:movieId/reviews`}>
              <ReviewsPage></ReviewsPage>
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
