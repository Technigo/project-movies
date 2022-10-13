import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import MyImage from 'left_arrow_icon.svg';

const SingleMovie = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  };

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4f32d41e25209822b9c7a73559fb2822&language=en-US`;

  useEffect(() => {
    console.log('useEffect');
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0) 70%, rgb(0,0,0) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div className="button-container">
        <img className="arrow-icon" src={MyImage} alt="arrow" />
        <button
          className="home-button"
          type="button"
          onClick={returnToHomePage}
        >
          Movies
        </button>
      </div>
      <div className="wrapper">
        <div className="movie-content">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
          <div className="text-container">
            <div className="title-vote">
              <h2>{movie.title}</h2>

              <h2 className="vote"> {movie.vote_average.toFixed(1)}</h2>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
