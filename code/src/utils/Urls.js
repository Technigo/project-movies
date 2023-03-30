// export const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US&page=1'
// export const TVSHOW_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US'
// export const ONCINEMA_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US&page=1'
// export const TVSHOW_DETAILS_URL = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US`

const API_KEY = '7f5b30559b3d85aec06d3d1a010f4a39'
export const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const TVSHOW_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
export const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
export const ONCINEMA_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`