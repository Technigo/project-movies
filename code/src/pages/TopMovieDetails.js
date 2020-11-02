import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { API_KEY } from '../key';

export const TopMovieDetails = () => {
  const params = useParams();
  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.topMovieID}?api_key=${API_KEY}&language=en-US`)
     .then((response) => response.json())
     .then((json) => {
      setTopMovie(json)
     })
  }, [params.topMovieID])

  return (
    <>
      <Link to="/top-movies" exact="true">
        <p>Back to Top Movies List</p>
      </Link>
      <div className="movie-details-page">
        <img src={`https://image.tmdb.org/t/p/w780/${topMovie.poster_path}`} alt={topMovie.original_title} />
        <h2>{topMovie.original_title}</h2>
        <p>{`${topMovie.vote_average} / 10`}</p>
        <p>{topMovie.overview}</p>
        <img width="300px" src={`https://image.tmdb.org/t/p/w1280/${topMovie.backdrop_path}`} alt={topMovie.original_title} />
      </div>
    </>
  )
};

//Create a component top movie details card to generate in the return instead of having all html here, pass data as props