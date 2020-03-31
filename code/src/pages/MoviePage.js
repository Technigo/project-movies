import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetails } from 'components/MovieDetails'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { Error } from 'components/Error'

export const MoviePage = () => {
  //useParams will return an object of key/value pairs from the app URL that is set to be dynamic 
  //Gives parameters of the current route and eliminates need to use the component props pattern
  const { movieId } = useParams()
  const [movie, setMovie] = useState({}) //Used to store movie object from GET request
  const [loading, setLoading] = useState(true) //Loading state to show LoadingSpinner when waiting for promise to be resolved
  const [error, setError] = useState(false) //Used to set error state if movie id is invalid

  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34 || json.status_code === 404) {
          setError(true) //Will allow Error component to be rendered if status code is 34 or 404
        } else {
          setMovie(json) //Changes state of movie with use of json from GET request
        }
        setLoading(false) //LoadingSpinner gets hidden as a result
      })
  }, [url, movieId]) //Sends new GET request to API if different movie is chosen and the id is changed


  //When the site is no longer loading and the spinner is hidden and the MovieDetails component is rendered.
  //If there's an error the Error component is rendered
  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <Error />}
      {!loading && !error &&
        <MovieDetails
          backdropUrl={backdropUrl}
          posterUrl={posterUrl}
          title={movie.title}
          vote_average={movie.vote_average}
          overview={movie.overview}
          production_companies={movie.production_companies} />
      }
    </>
  )


}