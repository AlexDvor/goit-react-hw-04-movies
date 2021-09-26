import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieByReviews } from '../../utils/fetchMovie';
import s from './Reviews.module.css';

export default function Reviews() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();
  console.log(movieData);

  useEffect(() => {
    fetchMovieByReviews(movieId).then(res => setMovieData(res.results));
  }, [movieId]);

  return (
    <>
      <ul className={s.wrapper}>
        {movieData.length > 0 ? (
          movieData.map(item => (
            <li key={item.id} className={s.item}>
              <h4>{item.author}</h4>
              {item.author_details.avatar_path ? (
                <img
                  src={item.author_details.avatar_path.slice(1)}
                  alt={item.author}
                  width="100px"
                />
              ) : (
                <>
                  <img
                    src="https://img.icons8.com/ios/100/000000/user-male-circle.png"
                    alt={item.author}
                    width="100px"
                  />
                </>
              )}
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
}
