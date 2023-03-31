import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2eb2f32ea6c8d9e53656503050d0b6fa&language=en-US&page=1';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch(TOP_RATED_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Top Rated Movies:', data.results); // Add this line
        setTopRatedMovies(data.results);
      });
  }, []);
  return (
    <div>
      {/* <h1>Top Rated Movies</h1> */}
      <MovieList movies={topRatedMovies} />
    </div>
  );
};

export default TopRatedMovies;
