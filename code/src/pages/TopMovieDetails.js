import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../key';
import { TopMovie } from 'components/TopMovie';
import { Loading } from 'components/Loading';
import { NotFound } from 'components/NotFound';

export const TopMovieDetails = () => {
  const { topMovieID } = useParams();
  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${topMovieID}?api_key=${API_KEY}&language=en-US`)
     .then((response) => response.json())
     .then((json) => {
      setTopMovie(json)
     })
     .catch(() => {
       console.error()
     })
  }, [topMovieID])

  if(topMovie.success === false) {
    return (
      <NotFound />
    )
  } else if (topMovie.id === undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      <TopMovie {...topMovie} />
    )
  }
};