export const API_MOVIE_LIST =
  "https://api.themoviedb.org/3/movie/popular?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US&page=1";

export const API_MOVIE_DETAILS = (movieName) =>
  `https://api.themoviedb.org/3/movie/${movieName}?api_key=4cfc03c4e32397dfd5018e9bb30b640c&language=en-US`;

//Here we can host our API links
//added another API for the movies
