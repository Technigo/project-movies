// these URLS can be switched to the movie details
export const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US&page=1';
// export const MOVIE_DETAILS = (movieId) => `${BASE_URL}/${movieId}`;
// I commented out the one above as that was not working, it did not get activated in MovieDetails
// and thus not giving us any second page with details when clicking a movie poster
export const MOVIE_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US`;