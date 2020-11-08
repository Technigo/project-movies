import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';


import './moviedetails.css';
import BackArrow  from '../components/BackArrow';


export const MovieDetails = () => {
  
  const { movieId } = useParams();

  const API_KEY = "ab5cef50889fc06c1a1e75470eefe28b";
  const URL_DETAILS =`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  
  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
    fetch(URL_DETAILS)
    .then(res => res.json())
    .then(data => {
      setMovieDetails(data)
  });
}, [URL_DETAILS, movieId]);
  // }, [URL_DETAILS,movieId]) it asked specififically for the url dependendencie... at first I had movieId, but why?

  return (
    <article className="details_page">
      <Route path='/movies'>
        <Link className="backLink" to={`/`}>
          <BackArrow />
            <h3>Movies</h3>
           </Link>
       </Route>
      <div className="details_background" 
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }} 
            alt={movieDetails.title}>
        <div className="summary">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title} />
             <div className="details_page_details">
                <h1>{movieDetails.title}
                  <span className="rating">
                  {movieDetails.vote_average}/10
                  </span>
                </h1>
                  <p>{movieDetails.overview}</p>
              </div>
        </div>
      </div>  
    </article>
  );
};


