const APIKEY = 'aef86c04633f65d609cb44099db77ec6';

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw Error(`Request rejected with status ${response.status}`);
  }
};

export const getMovie = async movieId => {
  console.log(movieId);

  if (isNaN(movieId)) {
    throw Error(`Request ID rejected because it's not a number`);
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw Error(`Request rejected with status ${response.status}`);
  }
};
