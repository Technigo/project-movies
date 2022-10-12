import React, { useEffect, useState } from 'react';

import MovieList from 'components/MovieList'

export const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1fb7c899a961ca96f61b53e4424dcf8e&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div>
      <MovieList movies={movieList} />
      Find me in src/app.js!
    </div>
  );
}
