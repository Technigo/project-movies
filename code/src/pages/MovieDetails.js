import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const MovieDetails = () => {

  const {id} = useParams();
  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e90c1322becf61268c0c0fea570c7099&language=en-US`)
    .then((res) => res.json())
    .then((json) => setMovieDetails(json))
    .catch(err => console.error(err))
}, [id])

if (movieDetails === undefined) {
  return <></>
}

  return (
    <article className='detail-page'>

        <Link to='/' className='back-button'>
            <i className="fas fa-chevron-circle-left"></i>
            <p>Movies</p>
        </Link>

        <div className='background' style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }} alt={movieDetails.title}>
          <div className='summary'>
            <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
            <div className='movie-details'>
                <h1>{movieDetails.title}<span className='rating'>{movieDetails.vote_average}/10</span></h1>
                <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>

    </article>

  )
}