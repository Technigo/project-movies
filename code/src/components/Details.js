/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Loader from 'components/Loader';

const apiKey = 'd4669261ce30d2ac76f238d73f4bd890';

const Details = () => {
  const [movie, setMovie] = useState({});
  const [ready, setReady] = useState(true);
  // const navigate = useNavigate();
  const params = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    setReady(false);
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .finally(() => setReady(true));
  }, [API_URL]);

  if (!ready) {
    return <Loader />;
  }
  // const goBack = () => {
  //   navigate(-1);
  // };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(11, 11, 11, 0.6),
          rgba(11, 11, 11, 0.6)
        ), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
      className="movie-details-wrapper">
      <div className="movie-details">
        <div className="image-wrapper">
          <nav>
            <NavLink className="back-button" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd" />
              </svg>

              Home
            </NavLink>
          </nav>
          {/* <button className="back-button" type="button" onClick={goBack}>
            {' '}
            Back{' '}
          </button> */}
          <div></div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="detail-wrapper">
          <h2>{movie.title}</h2>
          <div className="movie-info">
            <p>⭐️ {Math.round(movie.vote_average * 10) / 10} on IMDB</p>
            <p>Playtime {movie.runtime} minutes</p>
          </div>
          <p className="overview">{movie.overview}</p>
          <span className="released">Released {movie.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
