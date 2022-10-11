import MoviePoster from 'components/MoviePoster';
import React from 'react';

const MovieFeed = (props) => {
  return (
    <div className="poster-container">
      {props.posters.map((poster) => (
        <MoviePoster key={poster.id} poster={poster} />
      ))}
    </div>
  );
};

export default MovieFeed;
