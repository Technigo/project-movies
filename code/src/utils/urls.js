export const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4e4121b9dfc8f7526d534df6b657c5f5&language=en-US&page=1'
export const POSTER_URL = (path) => `http://image.tmdb.org/t/p/w500${path}`
export const MOVIE_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=4e4121b9dfc8f7526d534df6b657c5f5&language=en-US`
export const BACKDROP_URL = (path) => `http://image.tmdb.org/t/p/w1280${path}`