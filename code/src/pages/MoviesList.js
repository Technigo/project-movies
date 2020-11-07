import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './movielist.css'

const POPLIST_API = "https://api.themoviedb.org/3/movie/popular?api_key=ab5cef50889fc06c1a1e75470eefe28b&language=en-US&page=1";

export const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);  //useState store movies


  useEffect(() => {
    fetch(POPLIST_API) 
      .then(res => res.json())
      .then(data => {
        setMoviesList(data.results) //get list of movies frm api and pute data in movielist state 
      });
  }, [])

  return (
//map over state to render chosen elemnts
    <div className="movies_list">
      {moviesList.map(({id, poster_path, title, release_date}) => (
        <div key={id} className="movie_wrapper">
          <Link key={moviesList.id} to={`movies/${id}`}>
            <img className="movies_list_img" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="movie poster" />  
              <div className="movie_details">
                <h1>{title}</h1>
                  <p>Released {release_date}</p>
              </div>
          </Link>
        </div>
          ))}
    </div>
  )
};

