export const APIKEY = 'ee2a06e9fbf23fde74c944926c666a35'
export const MOVIELIST = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
export const MOVIEDETAILS = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}&language=en-US`