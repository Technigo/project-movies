export const API_MOVIE_LIST_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US&page=1";
export const API_MOVIE_LIST_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US&page=1";
export const API_MOVIE_LIST_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US&page=1";

export const API_MOVIE_DETAILS = (movieName) => `https://api.themoviedb.org/3/movie/${movieName}?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US`;
