export const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=37071aa78436fb5a9d697ae6e48d24ad';
export const DETAILS_URL = (movieID) =>
	`https://api.themoviedb.org/3/movie/${movieID}?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US`;
