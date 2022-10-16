export const API_KEY = 'cd77498709efaba476cc84767b989263'
export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
