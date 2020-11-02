import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API_KEY } from '../key';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  //We do an initial fetch to get data on the movies to show on our
  //Landing page. And we use a movies state to store that data in.
  //We will be working with an array of 20 movies.
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, []);

  return (
    <div className="movie-card">
      {/* We do a map on the movies array to create a movie card component
      for each movie in the array and make that movie card clickable with
      Link feature to direct to the page showing the movie details*/}
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}</p>
          </Link>
        </div>
      ))}
    </div>
  )
};

//Chose not to create a separate component for movie-card since it's
//not that complex or big of a component