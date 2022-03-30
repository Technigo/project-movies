const API_KEY = 'c3172ec38bb05890b52b6288d18c7b8e';

export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`