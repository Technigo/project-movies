import React from 'react'
import { LIST_URL } from 'utils/urls'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from 'components/Header'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import LoadingSpinner from 'components/LoadingSpinner'
import Footer from 'components/Footer'

export const App = () => {
  const [movieTitle, setMovieTitle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovieTitle()
  }, [])

  const fetchMovieTitle = () => {
    setLoading(true)
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setTimeout(() => setMovieTitle(data.results), 1000))
      .finally(() => setTimeout(() => setLoading(false), 1000))
  }

  return (
    <div className="movie-container">
      {loading && <LoadingSpinner />}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            {movieTitle.map((movie) => (
              <MovieList
                key={movie.id}
                movieId={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
                rating={movie.vote_average}
              />
            )
            )
            }
            <Footer />
          </Route>
          <Route exact path='/movie/:id'>
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter >
    </div >
  )
}

