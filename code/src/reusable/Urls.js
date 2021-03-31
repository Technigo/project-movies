export const MOVIE_LIST_URL = "https://api.themoviedb.org/3/movie/popular?api_key=54b9b4273ba4db041df9f1cbf5f6875f&language=en-US&page=1";


export const MOVIE_BACKDROP_URL = (backdrop_path) => `https://image.tmdb.org/t/p/w1280${backdrop_path}`;


export const MOVIE_DETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=54b9b4273ba4db041df9f1cbf5f6875f&language=en-US`;

// export const MOVIE_DETAILS_URL = (movieId) => `https://api.themoviedb.org/3/movie/popular${movieId}?api_key=54b9b4273ba4db041df9f1cbf5f6875f&language=en-US&page=1`yen trying stuff