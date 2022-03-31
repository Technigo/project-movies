const API_KEY = 'eb85018c9b0845f43bd288b4feca8a24';

export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const IMG_SIZE_URL = 'https://api.themoviedb.org/3/configuration?api_key=eb85018c9b0845f43bd288b4feca8a24'

export const DETAILS_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=eb85018c9b0845f43bd288b4feca8a24&language=en-US`