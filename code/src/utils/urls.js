// eslint-disable-next-line operator-linebreak
export const BASE_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=c939c336f6593e65481de7c928e9c092&page=1';
export const SINGLE_MOVIE_URL = (movieName) => `${BASE_URL}${movieName}`;
// export const DETAILS_URL = `https://api.themoviedb.org/3/search/movie?api_key=c939c336f6593e65481de7c928e9c092&query=${movieName}`;
