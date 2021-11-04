export const MOVIES_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=610e6fd11eb73d14566c56a8cf8aca50&with_genres=27";

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=610e6fd11eb73d14566c56a8cf8aca50&language=en-US`;
