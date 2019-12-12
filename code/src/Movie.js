import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import 'Movie.css'

export const Movie = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2a89f9965a48e33d809fbd966cc6a018&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovies(json)
        setLoading(false)
      })
  }, [movieId])

  if (loading === true) {
    return (
      <article className="loading"><p>Working on it... </p></article>
    )
  }


  return (
    <article className="about-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
      <div className="details-container">
        <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} />
        <section class="details">
          <h1>{movies.original_title}<span>{movies.vote_average}/10</span></h1>
          <p>{movies.overview}</p>
        </section>
      </div>
    </article >
  )
}