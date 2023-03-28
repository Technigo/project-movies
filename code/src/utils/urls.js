// these URLS can be switched to the movie details
export const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US&page=1';
export const MOVIE_DETAILS = (movieId) => `${BASE_URL}/${movieId}`;

// export const MOVIE_DETAILS = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US`