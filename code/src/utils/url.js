export const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=abdb03f8abcf67d9d8dda1bdbff21b0a&language=en-US&page=1";
export const DETAIL_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=abdb03f8abcf67d9d8dda1bdbff21b0a&language=en-US`;
