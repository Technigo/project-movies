/* eslint-disable */
export const POPULARMOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2eb2f32ea6c8d9e53656503050d0b6fa&language=en-US&page=1';
export const MOVIEDETAILS_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=2eb2f32ea6c8d9e53656503050d0b6fa&language=en-US`;
export const MOVIE_TRAILER_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=2eb2f32ea6c8d9e53656503050d0b6fa&language=en-US`;

