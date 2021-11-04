export const BASE_URL = (select) => `
  https://api.themoviedb.org/3/movie/${select}?api_key=0b19128e021726a300b4dee5c4748302&language=en-US&page=1`;
export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=0b19128e021726a300b4dee5c4748302&language=en-US`;
export const CREDITS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0b19128e021726a300b4dee5c4748302&language=en-US`;
