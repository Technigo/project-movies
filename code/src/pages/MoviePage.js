import React, { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom'; 
import { apiKey } from '../key';

export const MoviePage = () => { 
  const {movieId} = useParams (); 
  const [movie, setMovie] = useState ([]);

  useEffect (() => { 
    const moviePageUrl=`https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${apiKey}&language=en-US`
    fetch (moviePageUrl)
    .then((response) => response.json())
    .then((json) => {
      setMovie(json)
    })
}, [movieId])

return (
  <>
    <Link to ="/" exact='true'>
      <p>Movies List</p>
    </Link>

  </>

  )
}

