// export const API_URL = "https://pokeapi.co/api/v2/pokemon";
// export const POKEMON_URL = (pokemonName) =>
//   `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

export const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=0d34560dd59e7a0aee8cb172889cef4e&language=en-US&page=1";
export const DETAILS_URL = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=0d34560dd59e7a0aee8cb172889cef4e&language=en-US`;
