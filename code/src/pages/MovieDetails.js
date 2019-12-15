import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from 'BackIcon'

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fac0e6041f4464409ca2dd71e7e9d33c&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (json.status.code === 34) {
          setError('Movie not found')

        } else {
          setMovie(json)

        }
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1> Loading page</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="detailsPage">


      <Link className="backToMovies" to="/">
        <BackIcon /> Movies
          </Link>


      <main>
        {movie && (
          <div className="backDrop" alt="Movie Poster" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
            <article>
              <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />
              <div className="movieDetailWrapper">
                <div className="movieDetail">
                  <h1>{movie.title}</h1>
                  <h2>{movie.vote_average}/10</h2>
                </div>
                <h4>{movie.tagline}</h4>
                <p>{movie.overview}</p>
              </div>
            </article>
          </div>
        )}
      </main>

    </div>
  )
}



