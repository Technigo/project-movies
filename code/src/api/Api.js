const APIKEY = 'aef86c04633f65d609cb44099db77ec6';

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
  );

  if (response.status !== 200) {
    throw Error(`Request rejected with status ${response.status}`);
  } else {
    const data = await response.json();

    return data;
  }
};

export const getMovie = async movieId => {
  console.log(movieId);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`
  );

  if (response.status !== 200) {
    throw Error(`Request rejected with status ${response.status}`);
  } else {
    const data = await response.json();
    return data;
  }
};
