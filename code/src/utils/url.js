const API_KEY = '209a0638a264f94a90c60fee42a1001c'
export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const API_MOVIE_URL = movieId =>
  `https://api.themoviedb.org/3/movie/${movieId}7D?api_key=${API_KEY}7D&language=en-US`
