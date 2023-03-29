// /////////////// IMPORT //////////////////////// //

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// /////////////// COMPONENT //////////////////////// //

// This function creates list of clickable movie-covers
// The function starts with declaring,
// the variables and sets the useState value.

export const MovieList = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false);

  // Here we are calling the API and gets the JSON inside the useEffect.
  // The fetch is done every time the page gets reloaded.
  // .catch is catching eventual errors and displays them in a consol.log
  // No options is specified for this request its per default a GET

  useEffect(() => {
    setLoading(true)
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  // This is an IF/ELSE-statement. IF setLoading === (true) after the fetchcall then
  // shows "loading text" if the API call is delayed.

  if (loading) {
    return (
      <p>Loading</p>
    )
  }

  // /////////////// RETURNS JXT //////////////////////// //

  return (
    <section className="movie-list-container">
      {movieList.map((singleMovie) => {
        return (
          <section className="single-movie-container">
            <Link key={singleMovie.id} to={`/movieInfoPage/${singleMovie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w300${singleMovie.poster_path}`} alt={singleMovie.title} />
              <p>{singleMovie.title}</p>
              <p>{singleMovie.release_date}</p>
            </Link>
          </section>
        )
      })}
    </section>

  );
};

