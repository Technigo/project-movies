import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/moviedetails.css'
import RotatingPoo from './RotatingPoo';
import { PooTimer } from './util';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()

  console.log(movieId)

  useEffect(() => {
    // Sets loading to true for 3 seconds
    PooTimer(setLoading)

    // Calls the api and fetches information about a particular movie
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=02c269c6419024906430a5cca2edf53f&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data))
      .catch((error) => console.log(error))
  }, [movieId])

  // during loading, a component containing animated poo emoji will show up
  if (loading) {
    return <RotatingPoo />
  }

  return (
    <article className="main-container">

      <Link className="back-button" to="/">
        <img src="../cheveron-left.svg" alt="left arrow" className="left-arrow" />
      Movies
      </Link>
      <div className="background" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})` }}>
        <div className="summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt="movie poster" />
          <div className="details-container">
            <h1>
              <span>{movieDetail.title}</span>
              <span className="rating">⭐{movieDetail.vote_average.toFixed(1)}</span> {/* toFixed is used to round up decimal */}
            </h1>
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