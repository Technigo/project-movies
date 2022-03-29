import React from 'react';

const MovieList = ({movies}) => {
  return (
    <section>
      {movies.map((movie)=> {
        return (
          <div key={movie.id}>{movie.original_title}</div>
        )})}
    </section>
  )
}

export default MovieList;