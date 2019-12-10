import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { MovieCard } from './list/MovieCard'
import { MovieDetails } from './detail/MovieDetails'

export const App = () => {
  const [movies, setMovies] = useState([])
  // Fetch data from movie database
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=1a381f2cdba45c6f12c9451edcfa9c50&language=en-US&page=1")
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <section className="movie-list">
              {movies.map((movie) => {
                return (
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <MovieCard
                      title={movie.title}
                      date={movie.release_date}
                      poster={movie.poster_path} />
                  </Link>
                )
              })}
            </section>
          </Route>
          <Route path="/movies/:movieId">
            <section className="movie-overview">
              <MovieDetails />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}
