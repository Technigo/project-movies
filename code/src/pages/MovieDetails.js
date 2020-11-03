import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Movie } from 'components/Movie';
import { Loading } from 'components/Loading';
import { API_KEY } from '../key';
import { NotFound } from 'components/NotFound';

export const MovieDetails = () => {
  //The movie ID of the movie the user has clicked on will show on the
  //URL, so we use the params feature to access that movie ID
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);

  //We do a new fetch to the specific movie details endpoint, using the movie ID
  //we got from the params so we make sure to fetch the data for the right movie
  //The movie we want to display is determined with the movie/ setMovie state
  //We set movieID as dependency for this fetch, it will change if the movie id changes
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
     .then((response) => response.json())
     .then((json) => {
       setMovie(json)
     })
     .catch((err) => {
       console.log(err)
     })
  }, [movieID])


  if(movie.success === false) {
    return (
      <NotFound />
    )
  } else if (movie.id === undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      //We send the whole movie object to the Movie component so it has
      //all the data to display
      <Movie {...movie} />
    )
  }
};

//backdrop as background, access backdrop: src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}