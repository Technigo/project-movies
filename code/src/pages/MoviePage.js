import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom'; 
import { apiKey } from '../key';

export const MoviePage = () => { 
  const { movieId } = useParams (); 
  const [movie, setMovie] = useState ([]);

  useEffect (() => { 
    const moviePageUrl=`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    fetch (moviePageUrl)
    .then((response) => response.json())
    .then((json) => {
      setMovie(json)
      console.log(json)
    })
}, [movieId])

return (
  <>
    <Link to ="/" exact='true'>
'      <p>Movies List</p>
'    </Link>
          <section className="movie-page">
            <div 
              className="movie-page-background" 
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
              <div className="movie-page-details">
                <img className="movie-poster" src= {`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title}/>
                <div class="details-container">
                  <h2>{movie.original_title}</h2>
                  <p className="movie-rating">{`${movie.vote_average} /10`}</p>
                  <p className="movie-overview">{movie.overview}</p>
                </div>
              </div>
            </div>
          </section> 
  </>
  );
};
