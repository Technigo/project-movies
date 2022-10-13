/* eslint-disable linebreak-style */
export const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=124871c87c46d6e667f133342d66de5c&language=en-US&page=1'
export const MOVIES_DETAILS_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=12f0d4f0075ee3d1ab7e1bc82f5a355c&language=en-US`
export const COLLECTION_URL = (id) => `https://api.themoviedb.org/3/collection/${id}?api_key=12f0d4f0075ee3d1ab7e1bc82f5a355c&language=en-US`
export const TVSHOW_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=124871c87c46d6e667f133342d66de5c&language=en-US'
export const TVSHOW_DETAILS_URL = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=124871c87c46d6e667f133342d66de5c&language=en-US`
export const NEW_RELEASES_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=124871c87c46d6e667f133342d66de5c&language=en-US&page=1'
export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=124871c87c46d6e667f133342d66de5c&language=en-US&page=1&region=SE'