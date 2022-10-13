import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const Details = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const { id } = useParams()

  const roundedNumber = Math.round(movieDetails.vote_average * 10) / 10

  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=874b455d7037920aea9fd13db8645525&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
        console.log(data)
      })
  }

  useEffect(() => {
    FetchDetails()
  }, [])

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
      }}>
      <Link to="/" className="back-button">
        <img src="./back-arrow-100.png" alt="Back button" />
        <p>Back</p>
      </Link>
      <div className="movie-detail">
        <img src={`http://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="movie" />
        <div className="details">
          <div className="title-vote">
            <h1>{movieDetails.title}</h1>
            <h3><span className="vote-icon" /> {roundedNumber}</h3>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  )
}