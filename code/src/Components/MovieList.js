/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Movies } from 'Compontents/Movies';

export const MoviesList = () => {
  const [list, setList] = useState([]);

  /* Fetch function that allows us to get the movie titles, images from API */
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setList(data.results))
  }, [])

  /* A call back function - this useEffect hook awakens the FetchMovies function above */
  /* useEffect(() => {
  FetchMovies()
 }, []) */

  /* This return shows the img, titles, rdate & the id on our HTML page */
  return (
    <div>
      {list.map((movie) => (
        <div className="movie-container">
          <Movies
            title={movie.title}
            releaseDate={movie.release_date}
            movieId={movie.id}
            poster={movie.poster_path} />
        </div>
      ))}
    </div>
  )
}

export default MoviesList;