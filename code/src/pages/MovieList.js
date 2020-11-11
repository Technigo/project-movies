import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/movieList.css'
import { MOVIES_API } from '../constant'


import {
        upComingMovies,
        nowPlayMovies,
        topRatedMovies }
from '../constant'

//different list of movies base on different url, with placeholder in Select input//
const FILTER_OPTIONS = [ 
  {name: "Select your movie list", apiUrl:"disable, selected, hidden"},
  {name: "Popular movies", apiUrl: MOVIES_API},
  {name: "Upcoming movies", apiUrl: upComingMovies},
  {name: "On Theatre now", apiUrl: nowPlayMovies},
  {name: "Top Rated Movies", apiUrl: topRatedMovies }
];

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiFilter, setApiFilter] = useState(FILTER_OPTIONS[1].name);

  useEffect (() => {
    setLoading(true);
    const filterItem = FILTER_OPTIONS.find((item) => item.name === apiFilter);
    fetch(filterItem.apiUrl)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
      setLoading(false);
    });
  }, [apiFilter]);

  return (
    <div>
      <div className="select-container">
        <select className="select-input"
          placeholder="Select your movie list" 
          onChange={(event) => setApiFilter(event.target.value)}>
          {FILTER_OPTIONS.map((option) => (
            <option
              key={option.name}
              value={option.name}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-card-container">
        {loading ?
        <div className="loading-container">
          <p className="loading-note">Get yourself a drink and enjoy your movie time...</p>
        </div>
        :
        movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card-item">
            <article className="movie-cards" >
              <img 
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                alt={movie.title} 
              />
            </article>
          </Link>
        ))}
      </div>
    </div>
    );
};
 
export default MovieList;