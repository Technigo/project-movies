import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import MovieDetail from '../components/MovieDetail';
import { API_KEY } from '../api.js';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  //const [error, setError] = useState(false);

  //const API_KEY = '29ee910f5072fe7c4bc00a08633532c0';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(result => result.json())
      .then(json => {
        console.log(json);
        setMovie(json);
      });
  }, [movieId]);

  console.log(movie);

  return (
    <main>
      <Link to="/">
        <button type="button" className="back-button">
          Home
        </button>
      </Link>
      {movie.title && <MovieDetail {...movie} />}
    </main>
  );
};

export default MoviePage;
