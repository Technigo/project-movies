import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';
import NotFound from './NotFound';
import arrow from '../icons/arrow.svg';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const [detailLoading, setDetailLoading] = useState(false);

  const getMovieDetails = (movieId) => {
    const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=54ee7f54ed9c2538cd37d709a09a6ca2&language=en-US`
    fetch(MOVIE_DETAILS_URL)
      .then(res => res.json())
      .then(json => {
        setMovie(json);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    setDetailLoading(true);
    getMovieDetails(id);
  }, [id]);

  useEffect(() => {
    setDetailLoading(false)
  }, [movie])

  if (detailLoading) {
    return <Loading />
  } else {
    if (!movie.id) {
      return <NotFound />
    } else {
      return (
        <article className='detail-page'>
          <a className='back-link' href='/'>
            <img src={arrow} alt='back arrow' />
            Movies
          </a>
          <div className='background' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
            <div className='summary'>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className="details">
                <h1>
                  {movie.title}
                  <span className='rating'>{movie.vote_average}/10</span>
                </h1>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </article >
      );
    }
  }

};

export default MovieDetails;