export const api_key = '4a77da6a6f8ca91830ef7748e0d2a5ee'

export const API_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
export const API_DETAILS = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`