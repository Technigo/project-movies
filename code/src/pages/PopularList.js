import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './popularList.css'

// Here the logic of the fetch is put in a separate function - fetchMovies() -
// and is called in useEffect. As a result useEffect is self-contained - 
// has all the variables it needs within the function fetchMovies. The logic is in
// the scope of useEffect. Any changes to the url will be taken into account here. If not,
// we might have gotten an error about missing dependencies. In this solution all
// needed dependencies (url and api) are in scope. 
// I have not done the same in the MovieDetails component. 
// The function fetchMovies() is responsible for storing the url and the api, 
// in variables, as well as declaring the fetch method.

export const PopularList = () => {
  const [movies, setMovies] = useState([])
  const [isShown, setIsShown] = useState(false);

  const fetchMovies = () => {
    const api_key = 'de0e6f6f34bb3f7060237da93b37b9e0';
    const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    fetch(POPULAR_URL) // POPULAR_URL is the argument put in to access the api.
      .then((res) => res.json()) //the response from the API is read and parsed by the json method as JSON.
      .then((json) => { //the data from the api is accessed via json and stored in setMovies
      setMovies(json.results)
    })
    .catch((error) => {
      console.error(error); 
      //The catch statement allows us to define a block of code (here console.log(error)) to be executed, if an error occurs.
    })
  };
  
  useEffect(() => { // useEffect is called and runs the fetchMovies function - the fetch.
    fetchMovies();
  }, []);

  return ( // returns html/jsx to be outputted in browser via App, js and index.js
    <section className="list-container">
      {
        movies.map((movie) => (
          <div 
            className="list-card" 
            key={movie.id}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {
              isShown && // shows/hides the title and release date depeding on state - mouseEnter/Leave
              <div className="list-text">
                <h2 className="list-title">{movie.title}</h2>
                <h3>Released {movie.release_date}</h3>
              </div>
            }
            <Link to={`/title/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
        ))
      }
    </section>
  )
};