import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { API_KEY } from '../key';

export const MovieDetails = () => {
  //The movie ID of the movie the user has clicked on will show on the
  //URL, so we use the params feature to access that movie ID
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);

  //We do a new fetch to the specific movie details endpoint, using the movie ID
  //we got from the params so we make sure to fetch the data for the right movie
  //We set movieID as dependency for this fetch, it will change if the movie id changes
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
     .then((response) => response.json())
     .then((json) => {
       setMovie(json)
     })
  }, [movieID])

  //The movie we want to display is determined with the movie/ setMovie state
  return (
    <>
      <Link to="/" exact="true">
        <p>Back to Movies List</p>
      </Link>
      <div className="movie-details-page">
        <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p>{`${movie.vote_average} / 10`}</p>
        <p>{movie.overview}</p>
        <img width="300px" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.original_title} />
      </div>
    </>
  )
};

//backdrop as background, access backdrop: src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}

//Chose not to create a separate movie-details-page component since it's not
//a long or complex component, found it easier to keep it all here.

//Logic if I decide to implement NotFound page:
//console.log(typeof movie.id) //number
//console.log(typeof parseInt(movieID)) //string, so need to parse it

/*if(movie.id === parseInt(movieID)) {
    return (
      <>
      <Link to="/" exact="true">
        <p>Back to Movies List</p>
      </Link>
      <div className="movie-details-page">
        <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p>{`${movie.vote_average} / 10`}</p>
        <p>{movie.overview}</p>
        <img width="300px" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.original_title} />
      </div>
    </>
    )
  } else {
    return (
      //Need to create NotFound component if I want to implement this
      <NotFound />
    )
  }*/