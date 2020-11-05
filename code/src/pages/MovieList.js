import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Select from 'react-select'
import '../style/movieList.css'


import { MOVIES_API }
//         upComingMovies,
//         nowPlayMovies,
//         latestMovies,
//         topRatedMovies } 
from '../constant'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [listApi, setListApi] = useState(MOVIES_API)

  // const apiSelect = [ 
  //   {name: "popular", api: MOVIES_API},
  //   {name: "upcomining", api: upComingMovies},
  //   {name: "nowplayingmovies",api: nowPlayMovies},
  //   {name: "latestmovies", api: latestMovies },
  //   {name: "topratedmovies", api: topRatedMovies }
  // ]

  // const handleApiSelect = (event) => {
  //   apiSelect(event.target.value)
  //   setListApi(apiSelect);
  // }

  useEffect (() => {
    fetch(MOVIES_API)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
      setLoading(false);
    })
  }, []);

  return (
    <div className="movie-card-container">
      {loading ?
      <div className="loading-container">
        <p className="loading-note">Get yourself a drink and enjoy your movie time...</p>
        {/* <Select
        onChange={handleApiSelect}
        options={apiSelect}
        /> */}
      </div>
      : movies.map((movie) => (
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
    );
};
 
export default MovieList;