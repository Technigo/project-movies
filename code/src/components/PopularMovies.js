import React, { useState, useEffect } from 'react'
import { BASE_URL } from './data';
// import { Link } from 'react-router-dom'

export const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .finally(() => setLoading(false))
  }, []);
  if (loading) {
    return <h1>loading</h1>
  }
  console.log(movies)
  return (
    <section>
      <p>I am the popular movies</p>
      {movies.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </section>
  )
}

// Hej Nina! Här har jag fått det mesta att funka men
// behöver på något sätt länka till MovieDetails.