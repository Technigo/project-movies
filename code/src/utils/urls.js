const APIkey = '1fb7c899a961ca96f61b53e4424dcf8e'

export const BASE_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`;
export const MOVIEDETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`;