import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_MOVIE_ID } from "utils/Urls";

const Details = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(API_MOVIE_ID(id))
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id]);

  return (
    <div>
      {movie && (
        <div className="detailsPage">
          <div
            className="background-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
          >
            <Link to="/" className="back-button" onClick={onBackButtonClick}>
              <span className="back-icon">&lt;</span>
              <span className="back-text"> Go back to Movies</span>
            </Link>
            <div className="summary">
              <img
                className="poster-image"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="flex-info">
                <h1>
                  {movie.title}{" "}
                  <span className="rating">{movie.vote_average}/10</span>
                </h1>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
