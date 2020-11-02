import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies, id }) => {
  const params = useParams();

  useEffect(() => {
    const movieMatch = movies.find(
      (movie) => JSON.stringify(movie.id) === params.id
    );
    console.log(movieMatch);
  }, []);

  return (
    <section>
      <Link key={movies.id} to="/">
        Back to Movie List
      </Link>
    </section>
  );
};

export default MovieDetails;
