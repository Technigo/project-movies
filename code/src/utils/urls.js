export const MAIN_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a9cb0b073b02d5875ca2ecb51c896f88&language=en-US&page=1'
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a9cb0b073b02d5875ca2ecb51c896f88&language=en-US&page=1'

export const DETAILS_URL = (movieId) => 
	`https://api.themoviedb.org/3/movie/${movieId}?api_key=a9cb0b073b02d5875ca2ecb51c896f88&language=en-US`
