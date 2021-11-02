export const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US&page=1";

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=be5eea85da085a11d8b8e16d3d4bc087&language=en-US`;
