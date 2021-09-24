const URL = `https://api.themoviedb.org/3`;
const API_KEY = '93e18502a4f670f89316c5fc1b091bd6';

export async function fetchMovie() {
  return await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(Error.message));
  });
}

export async function fetchMovieBySearch(queryValue) {
  return await fetch(
    `${URL}/search/movie?api_key=${API_KEY}&query=${queryValue}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`400 Not Found`));
  });
}

export async function fetchMovieByID(id) {
  return await fetch(`${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`400 Not Found`));
  });
}

export async function fetchMovieByCast(id) {
  return await fetch(`${URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`400 Not Found`));
    },
  );
}

export async function fetchMovieByReviews(id) {
  return await fetch(`${URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`400 Not Found`));
    },
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
