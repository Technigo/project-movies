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
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bdc909b4c34b17568b8111077d9d4d62&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
      .catch((error) => {
        console.error(console.error(error))
      })
      .finally(() => {
        setLoading(false);
      })
  }, [id]);

  if (loading) {
    return (
      <p>Loading movie...</p>
    );
  }

  return (
    <div className="singleMovieWrapper">
      {movie && (
        <div
          className="background"
          style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.15)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>

          <div className="goBackWrapper">
            <button
              type="button"
              className="goBackBtn"
              onClick={onBackButtonClick}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons8-clapperboard-50-white.png`}
                alt="clapperboard icon"
                className="clapperboard-icon" />
            Go Back
            </button>
          </div>

          <div className="movieInfoWrapper">
            <SingleMoviePoster
              posterPath={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              altPoster={movie.title} />
            <SingleMovieDetails
              title={movie.title}
              overview={movie.overview}
              voteAverage={movie.vote_average} />
          </div>
        </div>
      )}
    </div>
  );
};