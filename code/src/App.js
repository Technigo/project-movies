import React from 'react'
import { LIST_URL } from 'utils/urls'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import LoadingSpinner from 'components/LoadingSpinner'
import Footer from 'components/Footer'
import ErrorMessage from 'components/ErrorMessage'

export const App = () => {
  const [movieTitle, setMovieTitle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovieTitle()
  }, [])

  const fetchMovieTitle = () => {
    setLoading(true)
    fetch(LIST_URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('something went wrong!')
        }
      })
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
            ))}
            <Footer />
          </Route>
          <Route exact path='/movie/:id'>
            <MovieDetails />
          </Route>
          <Route>
            <Link to='/' className="go-back-link">
              <p> <span className="back-arrow">&#8666;</span> Go Back</p>
            </Link>
            <ErrorMessage error={'something went wrong!'} />
          </Route>
        </Switch>
      </BrowserRouter >
    </div >
  )
}

