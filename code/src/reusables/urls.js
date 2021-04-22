export const MOVIE_LIST_API = 'https://api.themoviedb.org/3/movie/popular?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1'
export const DETAIL_API = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US`
export const SIRI_LIST_API = 'https://api.themoviedb.org/3/list/7087803?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US'
export const IDA_LIST_API = 'https://api.themoviedb.org/3/list/7087810?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US'
export const SEARCH_API = (search) => `https://api.themoviedb.org/3/search/movie?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1&include_adult=false&query=${search}`

export const POSTER_PATH = (poster_path) => `http://image.tmdb.org/t/p/w342/${poster_path}`
export const BACKDROP_PATH = (backdrop_path) => `http://image.tmdb.org/t/p/original/${backdrop_path}`