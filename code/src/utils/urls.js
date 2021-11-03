const API_KEY = '963cfc8ae0b11289f364cb1de6574bcf'

export const FETCH_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const DETAILS_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US'`