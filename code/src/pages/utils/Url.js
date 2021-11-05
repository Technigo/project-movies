const API_USER = "18efe4e6c09e4e4229e6b54ff367df52";

export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_USER}&language=en-US&page=1`;

export const URL_DETAILS = (movieId) =>
	`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_USER}&language=en-US`;

export const SIMILAR_URL = (movieId) =>
	`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_USER}&language=en-US&page=1`;
