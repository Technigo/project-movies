import React from 'react';

export const Detail = props => {
  return (
    <div className="movie-info-container">
      <img className="poster-image" src={props.movie} alt={props.poster_path} />
      <div className="movie-container">
        <div className="movie-info">
          <h1>{props.title}</h1>
          <p className="release-text">Released {props.release}</p>
        </div>
      </div>
    </div>
  );
};
