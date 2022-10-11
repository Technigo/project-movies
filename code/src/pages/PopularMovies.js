import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BASE_URL } from '../data/urls';

export const PopularMovies = () => {
  const [popMovies, setPopMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setPopMovies(data.results))
      .finally(() => setLoading(false))
  }, []);
  if (loading) {
    return <h1>loading</h1>
  }
  console.log(popMovies)
  return (
    <section className="movie-container">
      <p>I am the popular movies</p>
      {popMovies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            <div className="img-container">
              <img
                src={{ /* movie.poster_path url  */ }}
                alt={movie.title}
                className="image" />
              <div className="overlay">
                <div className="text">
                  <h2>{movie.title}</h2>
                  <p>text overlay</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

// Hej Nina! Här har jag fått det mesta att funka men
// behöver på något sätt länka till MovieDetails. // Tror jag har fixat in länken /NB