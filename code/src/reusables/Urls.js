export const API_URL_MOVIES = (list) => `https://api.themoviedb.org/3/movie/${list}?api_key=87a6bee8df47d296511c8924683d6ecf&language=en-US&page=1`

export const API_URL_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=87a6bee8df47d296511c8924683d6ecf&language=en-US`

export const URL_BACKDROP = (backdrop_path) => `https://image.tmdb.org/t/p/w1280${backdrop_path}`

export const URL_POSTER = (poster_path) => `https://image.tmdb.org/t/p/w1280/${poster_path}`
