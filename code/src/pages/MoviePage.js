import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Backbutton from '../components/Backbutton';
import MovieDetail from '../components/MovieDetail';
import { API_KEY } from '../api.js';

const MoviePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  // useEffect(() => {
  //   fetchMovieDetail();
  // }, [movieId]);

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setMovie(json);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [MOVIE_URL]);
  // useEffect(() => {

  // }, [movieId]);

  console.log(movie);

  return (
    <main>
      <Backbutton text={'Home'} />
      {/* <Link to="/">
        <button type="button" className="back-button">
          Home
        </button>
      </Link> */}
      {isLoading && <Loader />}
      {!isLoading && <MovieDetail {...movie} />}
    </main>
  );
};

export default MoviePage;
