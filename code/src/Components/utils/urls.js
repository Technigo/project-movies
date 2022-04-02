export const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?api_key=b76163de3249d5e587f4e92dceebd8d6&language=en-US&page=1"

// export const MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=b76163de3249d5e587f4e92dceebd8d6&language=en-US&page=1"

export const MOVIEDETAIL_API = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=b76163de3249d5e587f4e92dceebd8d6&language=en-US`