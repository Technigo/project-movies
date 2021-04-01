import React, { useEffect, useState } from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import { FaChevronCircleLeft } from 'react-icons/fa';
import './MovieDetails.css'

export const MovieDetails = () => {
  const { id } = useParams()
  const [pageNotFound, setPageNotFound] = useState(false)
  const [movies, setMovies] = useState()

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US`
  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // Status code 34 is 404 - Not found in the api response
        if (json.status_code === 34) {
          setPageNotFound(true)
        } else {
          setMovies(json)
        }
      })
  }, [MOVIE_URL])

  return (
    <>
      {pageNotFound && <Redirect to="/404" />}
      {movies && (
        <div>
          <div
            className="background-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`
            }} />
          <Link className="back-arrow" to="/">
            <FaChevronCircleLeft />
            <span className="icon-text">Movies</span>
          </Link>
          <div className="movie-details-container">
            <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.original_title} />
            <div className="movie-details">
              <h1>{movies.original_title} <span className="votes"> {movies.vote_average}/10</span></h1>
              <p>{movies.overview}</p>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

