const APIkey = '39ef0794788e9f0d1001295657696692';
export const MOVIELIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`;

export const MOVIEDETAILS_URL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`;
