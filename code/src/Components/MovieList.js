/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popcorn from './Intro';

/* STARTPAGE */
const MoviesList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Fetch function that allows us to get the movie titles, images from API */
  const FetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
      })
  }
  /* A call back function - this useEffect hook awakens the FetchMovies function above */
  useEffect(() => {
    FetchMovies()
    setLoading(true);
    setTimeout(() => setLoading(false), 2500)
  }, [])

  /* This return shows the img, titles, rdate & the id on our HTML page */
  return (
    <section className="startPage">
      <div className="movie-container">
        {list.map((movie) => (
          <article className="movie-wrapper" key={movie.id}>
            <Link key={movie.id} to={`/details/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className="details">
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {loading && (<Popcorn />)}
    </section>
  )
}

export default MoviesList;