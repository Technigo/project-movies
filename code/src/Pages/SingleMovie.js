import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const SingleMovie = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  };

  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4f32d41e25209822b9c7a73559fb2822&language=en-US`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id, url]);

  return (
    <div>
      <button type="button" onClick={returnToHomePage}>
        Home
      </button>
      <h2>{movie.title}</h2>
      <h2>{movie.overview}</h2>
      <h2>{movie.vote_average}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt=""
      />

      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt=""
      />
      <h1>Test detail about movie</h1>
    </div>
  );
};

export default SingleMovie;
