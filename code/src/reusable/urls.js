export const API_URL = (movieType) => `https://api.themoviedb.org/3/movie/${movieType}?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US&page=1`

export const API_DETAILS = (movies_id) =>`https://api.themoviedb.org/3/movie/${movies_id}?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US`
export const API_SIMILAR = (movies_id) => `https://api.themoviedb.org/3/movie/${movies_id}/alternative_titles?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US`
