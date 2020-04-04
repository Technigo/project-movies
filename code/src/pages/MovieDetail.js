import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a43e19df67e81dfd10b5f88d05f471f&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json);
      });
  }, [movieId]);

  return (
    <section className="detail-page">
      <div
        className="background"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      ></div>

      <div className="back-link-button">
        <Link className="back-link" to={"/"}>
          <span>{"◀︎◀︎"}</span>
          <p>Movies</p>
        </Link>
      </div>

      <div className="movie-info">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info-text">
          <h2>
            {movie.title}
            <span className="rating"> {movie.vote_average} / 10</span>
          </h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};
