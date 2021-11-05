export const LIST_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=03e945ac54f666ecb5176aa9f90b8fa0&language=en-US&page=1";

export const DETAIL_URL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=03e945ac54f666ecb5176aa9f90b8fa0&language=en-US`;
