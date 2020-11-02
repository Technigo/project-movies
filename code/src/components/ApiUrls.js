import { ApiKey } from './ApiKeys';

export const ApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
export const ApiImgUrl = `https://api.themoviedb.org/3/configuration?api_key=${ApiKey}`;
// export const ApiDetailsUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${ApiKey}&language=en-US`;
export const ApiDetailsUrlPt1 = 'https://api.themoviedb.org/3/movie/';
export const ApiDetailsUrlPt2 = `?api_key=${ApiKey}&language=en-US`;
