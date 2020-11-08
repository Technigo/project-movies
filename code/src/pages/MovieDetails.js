import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { BackButton } from 'components/BackButton'
import diamonds from '../assets/diamonds.svg'
import diamond from '../assets/diamond.svg'

export const MovieDetails = () => {
  // Why does id need to be in curlies?
  const { id } = useParams()
  const API_KEY = "0db2a5ac0c510ce6221cadf605f4d3e6"
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  const [movie, setMovie] = useState({})
  

  console.log(`Id is: ${id}`)

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(json => setMovie(json))
  }, [])

  const backgroundSize = "original"
  const posterSize = "w500"
  const backdropURL = `https://image.tmdb.org/t/p/${backgroundSize}/${movie.backdrop_path}`
  const posterURL = `https://image.tmdb.org/t/p/${posterSize}/${movie.poster_path}`
  const imdbURL = `https://www.imdb.com/title/${movie.imdb_id}/`
  const genres = movie.genres

  return (<>
    <main
      className="movie-details-page"
    >
      <BackButton />

      <div className="movie-details-info-container">
        <div className="movie-details-info-container-top">
          <img src={posterURL} className="movie-details-poster" alt={`Still image from ${movie.title}`} />
          <div className="movie-details-info-main">
            <div className="movie-details-title">{movie.title}</div>
            
            <div className="movie-details-tagline"><p>{movie.tagline}</p></div>
            <div className="movie-details-divider">
              <img src={diamonds} alt="diamonds divider"/>
            </div>
          </div>
        </div>
        <div className="movie-details-overview">
          <p>{movie.overview}</p>
          <div className="movie-details-extra-info">
            {/* 
            This is code for mapping through genres I couldn't get working. It's supposed to map through the array of genres, but I can't for the life of me figure out why it won't. I ~think~ I'm trying to map through something that isn't an array (it works when I map through a predefined array of [1,2,3], for example), but it really looks like an array in the GET request. Anyway – omitting this for the submission, and maybe get back to it later. If the person reading this can figure out why it doesn't work, I'd appreciate it. 
            <p>
              { genres.map(genre => console.log(genre.name)) }
            </p>
            <img src={diamond} /> */}
            <div className="rating-tag margin-right">
              <span className="movie-card-rating">{movie.vote_average}<span className="subtle">/10</span></span>
            </div>
            <p className="margin-right">Released: {movie.release_date}</p>
            <img src={diamond} alt="diamond divider" className="margin-right"/>
            <a href={imdbURL} target="_blank" rel="noopener noreferrer">View on iMDB</a>
          </div>
        </div>
      </div>
    </main>
    <div style={{
      backgroundImage: `url('${backdropURL}')`
    }} className="movie-details-tint"></div>
  </>)
}