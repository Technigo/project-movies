/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from './Footer';

const MovieList = ({ movieList }) => {
  return (
    <>
      <Header />
      <section
        className="movies">
        {movieList.map((movie) => {
          return (
            <div className="movie-container">
              <Link
                key={movie.id}
                to={`/details/${movie.id}`}
                className="movie">
                <div className="image-overlay" />
                <img className="details-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="movie-poster" />
                <div className="movie-details">
                  <h2> {movie.title} </h2>
                  <h3>Release date: {movie.release_date} </h3>
                </div>
              </Link>
            </div>
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default MovieList;