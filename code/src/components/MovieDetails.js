import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const posterPath = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
  const backdropPath = `https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`
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
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <img src={posterPath} className="poster" alt="bla" />
          <img src={backdropPath} className="background-img" alt="bla" />
        </>
      )}
    </div>
  );
}

export default MovieDetails