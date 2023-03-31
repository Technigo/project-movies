/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loadingscreen from './Loadingscreen'

const popularmoviesAPI = ('https://api.themoviedb.org/3/movie/popular?api_key=065dbac7034263f7650d6351836bfcf7&language=en-US&page=1')

const Popularmovies = () => {
  const [popularmovieslist, setPopularmovieslist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(popularmoviesAPI)
      .then((response) => response.json())
      .then((data) => setPopularmovieslist(data.results))
      .catch((e) => { console.error(e) })
      .finally(() => { setLoading(false) })
  }, [])
  console.log(popularmovieslist)
  if (loading) {
    return <Loadingscreen />
  }
  return (
    <section>
      <h2 className="header-text"> POPULAR MOVIES</h2>
      <div className="movies-wrapper">
        {popularmovieslist.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/moviedetails/${movie.id}`}>
              <div className="card-info">
                <h1 className="movietitle"> {movie.title} </h1>
                <p>Release date: {movie.release_date}</p>
              </div>
              <p className="release-date">{movie.release_date}</p>
              <img
                className="movieposter"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} />
            </Link>
          )
        })}

      </div>
    </section>
  )
}

export default Popularmovies;