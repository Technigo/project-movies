import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <>
      <h1>Top rated movies</h1>
      <section className="sectionWrapper">

        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="movieBox">
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" className="poster" />
              <div className="hoverBox">
                <h1 className="hoverDetails">{movie.title}</h1>
                <p className="hoverDetails">Released {movie.release_date}</p>
              </div>

            </Link>
          )
        })}
      </section>
    </>
  )
};