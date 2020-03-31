import React, { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'

export const MoviesList = () => {
  // const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1'
  const [movies, setMovies] = useState([])
  const [selection, setSelection] = useState('upcoming')

  const submitHandler = (event) => {
    event.preventDefault()
    setSelection(event.target.value)
    console.log(selection)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${selection}?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [selection])



  return (
    <div className="movies-container">

      <button onClick={submitHandler} value={"upcoming"}>upcoming</button>
      <button onClick={submitHandler} value={"popular"}>popular</button>
      <button onClick={submitHandler} value={"top_rated"}>top_rated</button>

      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          img={movie.poster_path}
          releaseDate={movie.release_date}
        />
      ))}

    </div>
  )
}