export const MOVIE_LIST_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=53b8247bd63f1573ceb909c8f6502bd9&language=en-US&page=1'

export const MOVIE_DETAILS_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=53b8247bd63f1573ceb909c8f6502bd9&language=en-US`