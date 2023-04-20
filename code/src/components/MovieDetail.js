import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'css/movieDetails.css'
import BackIcon from 'icons/arrow2.png';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json)
      })
  }, [id])
  return (
    <section className="movie-wrapper">
      {movieDetail && (
        <div
          className="background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})`
          }}>
          <div className="summary-wrapper">
            <div className="back-btn-div">
              <Link to="/" className="backLink">
                <img className="back-image" src={BackIcon} alt="back button" />
              </Link>
              <div className="back-text">Movies</div>
            </div>
            <img className="poster-img" src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt={movieDetail.title} />
            <div className="details-info">
              <div className="details-title">
                <h1>{movieDetail.title}</h1>
              </div>
              <div className="details-rating">
                <p><span className="star">⭐</span> {Math.round(movieDetail.vote_average * 10) / 10}</p>
              </div>
              <p className="overview">{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MovieDetail