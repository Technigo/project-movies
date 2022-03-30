export const API_KEY = "e60deb7f3dc9d5dba9ffdfcfada874a5";
export const MOVIES_URL = (API_KEY) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const MOVIE_DETAILS_URL = (API_KEY, movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;