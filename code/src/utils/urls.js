export const MOVIE_LIST_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=86e13ee94ff829d42c804ae17826dc54';
export const MOVIE_DETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=86e13ee94ff829d42c804ae17826dc54&language=en-US`;

export const TV_SERIES_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=86e13ee94ff829d42c804ae17826dc54';
export const TV_SERIES_DETAILS_URL = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=86e13ee94ff829d42c804ae17826dc54&language=en-US`;

export const UP_COMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=86e13ee94ff829d42c804ae17826dc54&language=en-US&page=1&region=SE'
