// All the fetch-links used for this app
export const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US&page=1';
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US`;