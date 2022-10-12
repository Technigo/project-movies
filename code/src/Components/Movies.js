import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' // importing for usage
// import { useParams } from 'react-router-dom';

export const Movies = () => {
  const [fetchMovies, setFetchMovies] = useState([]) // default state for picking up data

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setFetchMovies(data.results))
      .catch((error) => console.error(error))
  }, []) // square bracket meaning for only when mounting

  return (
    <nav>
      <Link className="home-page text-red-800 pl-3" to="/movielist"> I AM A LINK PRESS ME/ Home page</Link>
    </nav>
  )
}
