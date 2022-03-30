import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_MOVIE_ID } from "utils/Urls";

const Details = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(API_MOVIE_ID(id))
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [id]);

  return (
    <div className="detailsPage">
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>
            {movie.title}{" "}
            <span className="rating">{movie.vote_average}/10</span>
          </h1>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
