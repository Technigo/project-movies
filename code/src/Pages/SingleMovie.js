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
  console.log(useParams);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4f32d41e25209822b9c7a73559fb2822&language=en-US`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id, url]);

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <button type="button" onClick={returnToHomePage}>
        Home
      </button>
      <div className="wrapper">
        <div className="movie-content">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
          <div className="text-container">
            <div className="title-vote">
              <h2>{movie.title}</h2>
              <h2 className="vote">{movie.vote_average}</h2>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
