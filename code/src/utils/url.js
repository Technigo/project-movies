const API_KEY = '209a0638a264f94a90c60fee42a1001c'
export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const API_MOVIE_URL = movieId =>
  movieId !== undefined
    ? `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    : 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80'
export const POSTER_URL = path => `https://image.tmdb.org/t/p/w400/${path}`
export const BACKDROP_URL = path => `https://image.tmdb.org/t/p/w1280/${path}`
