export const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US&page=1';
// export const MOVIE_DETAILS = (movieId) => `${BASE_URL}/${movieId}`;
// I commented out the one above as that was not working, it did not get activated in MovieDetails
// and thus not giving us any second page with details when clicking a movie poster
export const MOVIE_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US`;
// We never got the MOVIE_DETAILS url to work but we keep it so we can ask if someone else solved it