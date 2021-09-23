async function fetchMovie() {
  const URL = `https://api.themoviedb.org/3/`;
  const API_KEY = '93e18502a4f670f89316c5fc1b091bd6';

  return await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`400 Мы не нашли такого фильми у нас сервере`));
  });
}

export default fetchMovie;

// GET / trending / movie / day;

// const TRENDING = 'trending/movie/day';
// const SEARCH_MOVIE = 'search/movie';
