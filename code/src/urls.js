// Api key and urls to fetch the movie list and the details

export const API_KEY = "a42559943824c6a02203973f57136d18";
export const MOVIES_URL = (API_KEY) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const MOVIE_DETAILS_URL = (API_KEY, movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
