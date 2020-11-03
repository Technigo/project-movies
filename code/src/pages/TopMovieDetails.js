import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TopMovie } from 'components/TopMovie';
import { Loading } from 'components/Loading';
import { API_KEY } from '../key';
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
     .catch((err) => {
       console.log(err)
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

//https://dev.to/kapi1/how-to-fix-page-not-found-on-netlify-a4i
//A special _redirects file is added to public folder in order for the redirecting logic
//above to work, this logic to redirect to not found page works locally, but broke down
//when deployed on Netlify. This redirect file helps so that when deployed
//Netlify knows how to handle the route. Info on the article linked above.