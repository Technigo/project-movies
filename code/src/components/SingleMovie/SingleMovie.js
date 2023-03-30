import { SingleMoviePoster } from 'components/SingleMoviePoster/SingleMoviePoster';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SingleMovieDetails } from '../SingleMovieDetails/SingleMovieDetails';
import './SingleMovie.css'

export const SingleMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  const { id } = useParams()
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bdc909b4c34b17568b8111077d9d4d62&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [id]);

  return (
    <div className="detailPage">
      {movie && (
        <div className="background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <button type="button" onClick={onBackButtonClick}>Go Back</button>
          <div>
            <SingleMovieDetails
              title={movie.title}
              overview={movie.overview}
              voteAverage={movie.vote_average} />
            <SingleMoviePoster
              posterPath={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              altPoster={movie.title} />
          </div>
        </div>
      )}
    </div>
  );
};