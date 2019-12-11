import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "Nav";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc325ede4f72069add696614aa58b9e2&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json);
        console.log(json);
      });
  }, [movieId]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`})`
      }}
    >
      <Nav />

      {/* <img
        className="big-image"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
      /> */}
      <div className="summary">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h2>
            {movie.title}
            <span className="rating"> {movie.vote_average}/10</span>
          </h2>

          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
