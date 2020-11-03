import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import MovieDetail from '../components/MovieDetail';
import { API_KEY } from '../api.js';

const MoviePage = () => {
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetail(movieId);
  }, [movieId]);

  const fetchMovieDetail = movieId => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(result => result.json())
      .then(json => {
        if (json.success === false) {
          setError(true);
          console.log(json);
        } else {
          console.log(json);
          setMovie(json);
        }
        setLoading(false);
      });
  };
  // useEffect(() => {

  // }, [movieId]);

  console.log(movie);

  return (
    <main>
      <Link to="/">
        <button type="button" className="back-button">
          Home
        </button>
      </Link>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && !error && <MovieDetail {...movie} />}
    </main>
  );
};

export default MoviePage;
