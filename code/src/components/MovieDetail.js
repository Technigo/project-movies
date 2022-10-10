import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'css/movieDetails.css'

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

    <section>
      <Link to="/" className="backLink">
        <img src="icons/back.png" alt="back button" /> Movies
      </Link>
      {movieDetail && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})` }}>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt={movieDetail.title} />
            <div className="details">
              <h1><span className="title">{movieDetail.title}</span> <span className="rating">{Math.round(movieDetail.vote_average * 10) / 10}</span></h1>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      )}

      <div className="movie-detail-div">
      Here comes some info in a div
      </div>
    </section>
  )
}

export default MovieDetail