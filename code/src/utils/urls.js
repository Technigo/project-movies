export const API_KEY = '58f3216079ddc4b1100488665621f8a0'
export const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const DETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
