const API_KEY = '1b9769aa9e5560e8a791359c39fbb31e'

export const MOVIE_LIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const DETAILS_URL = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`