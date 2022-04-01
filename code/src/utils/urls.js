export const URL_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US&page=1';
// export const URL_DETAILS ='https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}&language=en-US';

export const SINGLE_MOVIES_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US`;
