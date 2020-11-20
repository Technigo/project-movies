import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { apiKey } from './Key';
import { BackButton } from './BackButton';
import 'moviedetails.css';


export const MovieDetails = () => {
  const { movieId } = useParams();
  const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(DETAILS_API)
      .then((res) => res.json())
      .then((json) => setMovie(json))
  }, [DETAILS_API, movieId]);

    return (
      <div>
        <div className="background-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }} alt={movie.title}>
            <Route path='/movies'>
              <Link to='/' className='back-menu'>
                <BackButton />
                <h2 className='back-text'>Movies</h2>
              </Link>
            </Route>
            <div className='movie-details'>
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                className='movie-img'
              />
              <div className='movie-detail-container'>
                <h1 className='movie-title'>{movie.title}
                  <span className='rating-text'>
                    {movie.vote_average}
                  </span>
                </h1>
                <p className='movie-plot'>{movie.overview}</p>
              </div>
            </div>
        </div>
      </div>
    );
};

