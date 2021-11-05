const apiKey = "9a45ddb88ed89212aeb20bf4d0f2eba8";
export const POPULAR_URL_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
export const TOP_URL_LIST = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
export const UPCOMING_URL_LIST = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
export const NOW_PLAYING_URL_LIST = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
export const URL_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
