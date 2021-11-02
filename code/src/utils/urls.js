export const MOVIES_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=610e6fd11eb73d14566c56a8cf8aca50&with_genres=27";

// Horror movies API
// https://api.themoviedb.org/3/movie/popular?api_key=610e6fd11eb73d14566c56a8cf8aca50&language=en-US&page=1

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=610e6fd11eb73d14566c56a8cf8aca50&language=en-US`;

// venon movie: _id580489;

// Do we need this 3rd url?

export const IMAGE_URL =
  "https://api.themoviedb.org/3/configuration?api_key=610e6fd11eb73d14566c56a8cf8aca50";

// api key: 610e6fd11eb73d14566c56a8cf8aca50
