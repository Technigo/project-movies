const API_KEY = '6fb1d64d540188673e57f0b42d2bacb8'

export const MOVIE_LIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const POSTER_URL = `https://image.tmdb.org/t/p/w342`

export const BACKDROP_URL = `https://image.tmdb.org/t/p/w1280`

export const MOVIE_DETAIL_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`