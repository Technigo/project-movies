import React from 'react';

const Movie = ({ posterImg, title, rating, description }) => {
  return (
    <div className="movie--details">
      <img className="movie--details--image" src={posterImg} alt={title} />

      <div className="movie--details--textbox">
        <h2 className="movie--details--title">
          {title}
          <span className="movie--details--rating">{rating}/10</span>
        </h2>
        <p className="movie--details--description">{description}</p>
      </div>
    </div>
  );
};

export default Movie;
