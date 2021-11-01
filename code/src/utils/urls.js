const api_key = "9a45ddb88ed89212aeb20bf4d0f2eba8";
export const URL_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
export const URL_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

// https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US

// https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&page=1
