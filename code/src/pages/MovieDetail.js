import React, { useEffect, useState } from 'react';
import { useParams, Link, Route } from 'react-router-dom';

import { API_KEY } from '../api.js';

const MovieDetail = () => {
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
      <Route path="/movies">
        <Link to="/">
          <button type="button" className="back-button">
            Home
          </button>
        </Link>
      </Route>
      {movie.title && (
        <section
          className="detail"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="detail__info-container">
            <h2>
              {movie.title}
              <span className="detail__vote">{movie.vote_average}/10</span>
            </h2>
            <p>{movie.overview}</p>
          </div>
          {movie.genres.map(genre => (
            <Link key={genre.name} to={`/genre/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          ))}
          {movie.production_companies.map(company => (
            <Link key={company.name} to={`/company/${company.id}`}>
              <p>{company.name}</p>
            </Link>
          ))}
          {/* {console.log(movie.production_companies)} */}
          {/* <h3>{movie.production_companies}</h3> */}
        </section>
      )}
    </main>
  );
};

export default MovieDetail;
