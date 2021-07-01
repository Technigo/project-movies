import React from "react";
import { Link } from "react-router-dom";
import "./MovieCover.css";
import genres from "../genres.json";

const MovieCover = (props) => {
  return (
    <div className='cover'>
      <Link to={`${props.movie.id}`}>
        <div className='wrapper'>
          <img
            className='coverimage'
            src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}
            alt={props.movie.overview}
          />
          <div className='overlay'>
            <div className='rating'>
              <span className='label'>Rating:</span>{" "}
              {(props.movie.vote_average / 2).toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
      <Link to={`${props.movie.id}`}>
        <h2 className='title'>{props.movie.title}</h2>
      </Link>
      <div className='genres'>
        {props.movie.genre_ids.map((genreId, index) => {
          let specificGenre = genres.find((genre) => genre.id === genreId);
          return (
            <p key={genreId} className='genre'>
              {specificGenre.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCover;
