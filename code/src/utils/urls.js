// these URLS can be switched to the movie details
export const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=%7Bapi_key%7D&language=en-US&page=1';
export const SINGLE_POKEMON_URL = (pokemonName) => `${BASE_URL}/${pokemonName}`;