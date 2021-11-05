const API_KEY = '1cd9c12b0f59437cb1f892337285c32e'
// export const API_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
// export const API_LIST = (countryCode) =>
//   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=${countryCode}`
// export const API_LIST = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=JP`
export const API_LIST = (countryCode) =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=${countryCode}`
// export const API_LIST = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=JP`
