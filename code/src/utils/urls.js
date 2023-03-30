const apiKey = '012b5e0d6a17064c1b4e1d5d9021d5ae'

export const LIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
export const SINGLE_MOVIE_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`