import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/moviedetails.css'

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()
  const navigate = useNavigate()

  console.log(movieId)
  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=02c269c6419024906430a5cca2edf53f&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [movieId])
  if (loading) {
    return <h1>hold your poo</h1>
  }
  console.log(movieDetail)
  return (
    <article className="main-container">

      <button className="back-button" type="button" onClick={onBackButtonClick}>
        <img src="../cheveron-left.svg" alt="left arrow" className="left-arrow" />
      Movies
      </button>
      <div className="background" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})` }}>
        <div className="summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt="movie poster" />
          <div className="details-container">
            <h2>
              <span>{movieDetail.title}</span>
              <span>⭐{movieDetail.vote_average.toFixed(1)}</span>
            </h2>
            <p>
              <span>{movieDetail.overview}</span>
            </p>
          </div>

        </div>
      </div>
    </article>
  )
}

export default MovieDetails;