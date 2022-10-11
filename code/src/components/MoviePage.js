/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// skickar inte in props här som det är nu
const MoviePage = ({ movieList }) => {
  const { id } = useParams();
  const movieMatch = movieList.find((movie) => movie.id === id);
  console.log(movieMatch)

  return (
    <div style={{ backgroundColor: '#FFF' }}>
      <Link to="/">Movies</Link>
      <p>Katt</p>
    </div>)
  { /* <article
      className="movie-page"
      style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}>
      <div className="go-back">
        <img src="" alt="Go back" />
        <Link to="/">Movies</Link>
      </div>
      <img src={`http://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`} alt={selectedMovie.title} />
      <h2>{selectedMovie.title} {selectedMovie.vote_average}</h2>
      <p>{selectedMovie.overview}</p>
    </article> */ }
}

export default MoviePage;