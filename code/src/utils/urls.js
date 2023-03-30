const apiKey = 'a2d2aecb5322eff67704d6c8635d60c1'

export const LIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
export const SINGLE_MOVIE_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`