const APIKEY = 'aef86c04633f65d609cb44099db77ec6';

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
  );
  const data = await response.json();

  return data;
};

export const getMovie = async movieID => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKEY}&language=en-US`
  );
  const data = await response.json();

  return data;
};
