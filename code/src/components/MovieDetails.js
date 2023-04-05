import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const posterPath = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
  const backdropPath = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
  // const API_KEY = '7e62f4c867db459871fea2a9a052cb08';
  // `https://api.themoviedb.org/3/movie/${movieInfo}?api_key=${API_KEY}&language=en-US`
  // https://api.themoviedb.org/3/movie/76600?api_key=7e62f4c867db459871fea2a9a052cb08&language=en-US

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id])

  return (
    <div className="detailContainer">
      <a
        className="icon"
        aria-label="button"
        href="#"
        onClick={onBackButtonClick}>
        <i className="fa-solid fa-circle-chevron-left" />
        <span>Back to movies</span>
      </a>
      {movie && (
        <div className="detailSummary" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(${backdropPath})` }}>
          <img src={posterPath} className="poster" alt="bla" />
          <div className="detailText">
            <h2>{movie.title}</h2>
            <p className="rating">⭐️ {Math.round(movie.vote_average * 10) / 10}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
