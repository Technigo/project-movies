import { ApiKey } from './ApiKeys';

// Initial URL
export const ApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;

// Image URLs
export const PosterImgUrl = `https://image.tmdb.org/t/p/w500`;
export const BackdropImgUrl = `https://image.tmdb.org/t/p/w1280`;

// Category URLs
export const ChristmasApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=christmas&page=1&include_adult=false`;
export const HarryPotterApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=harry%20potter&page=1&include_adult=false`;
export const TopRatedApiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`;
export const UpcomingApiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`;
