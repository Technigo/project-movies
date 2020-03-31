import React, { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'
import { InputRadio } from '../components/InputRadio'

export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [endpoint, setEndpoint] = useState('popular')

  const oldArray = ['upcoming', 'popular', 'top_rated']

  const selections = {
    popular: 'Popular',
    upcoming: 'Upcoming',
    top_rated: 'Top rated'
  }


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [endpoint])


  return (
    <div className="movies-container">

      <div className="filter">
        <InputRadio
          label="Filter:"
          id="chooseSelection"
          array={oldArray}
          object={selections}
          state={endpoint}
          setState={setEndpoint}
        />
      </div>

      {
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))
      }

    </div >
  )
}