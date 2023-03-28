import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { NotFound } from 'components/NotFound'

export const Details = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const { id } = useParams()

  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data)
        .catch((error) => {
          console.log(error)
          if (error) {
            return (<NotFound />
            )
          }
        }))

    useEffect(() => {
      FetchDetails()
    }, [])

    return (
      <div
        className="background"
        style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original${movieDetails.backdrop_path})` }}>
        <Link to="/" className="back-button"><p>Back</p></Link>

        <div className="movie-detail">
          <div className="details">
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}