import { APIKEY } from './ApiKeys';

// Initial URL
export const APIURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;

// Image URLs
export const POSTER_IMG_URL = `https://image.tmdb.org/t/p/w500`;
export const BACKDROP_IMG_URL = `https://image.tmdb.org/t/p/w1280`;

// Category URLs
export const APIURL_CHRISTMAS = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=christmas&page=1&include_adult=false`;
export const APIURL_HARRYPOTTER = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=harry%20potter&page=1&include_adult=false`;
export const APIURL_TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
export const APIURL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
