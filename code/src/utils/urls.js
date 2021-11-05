export const BASE_URL = (select) =>
  `https://api.themoviedb.org/3/movie/${select}?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1`

// export const API_URL_POPULAR =
//   "https://api.themoviedb.org/3/movie/popular?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1";

// export const API_URL_TOP_RATED =
//   "https://api.themoviedb.org/3/movie/top_rated?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1"

// export const API_URL_NOW_PLAYING =
//   "https://api.themoviedb.org/3/movie/now_playing?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1"

// export const API_URL_UPCOMING =
//   "https://api.themoviedb.org/3/movie/upcoming?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1"

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US`;
