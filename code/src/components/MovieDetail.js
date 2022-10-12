import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'css/movieDetails.css'
import backIcon from 'icons/back.png';

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
        <div className="background">
          <img className="background-img" src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`} alt={movieDetail.title} />
          <div className="back-btn-div">
            <Link to="/" className="backLink">
              <img className="back-image" src={backIcon} alt="back button" />
            </Link>
            <span> Back to movies</span>
          </div>
          <div className="summary-wrapper">
            <img className="poster-img" src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt={movieDetail.title} />
            <div className="title">
              <h1>{movieDetail.title}</h1>
            </div>
            <div className="rating-div">
              {Math.round(movieDetail.vote_average * 10) / 10}
            </div>
            <p className="overview-p">{movieDetail.overview}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default MovieDetail