import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { id } = useParams()
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=40162efa089492073c3b7dbba9617e0b&language=en-US`;
  const [movieDetails, setMovieDetails] = useState([]);

  console.log(DETAILS_URL)
  // try to add a specific id to the url and see what happens. And cosnole.log url


  useEffect(() => {
    fetch(DETAILS_URL)
    .then(response => response.json())
    .then(json => setMovieDetails(json))
  }, [id]); //Have URL instead of id?

  return(
    <> 
    <section className="movies-list">
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
    <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
    {movieDetails.title} - {movieDetails.vote_average}
      <div className="movie-thumb-image-wrapper">
        <p className="movie-thumb-image-description">{movieDetails.overview}</p>
      </div>
    </div>
    </section>
    </>
  )

}


/* name={movie.title}
background_image={movie.poster_path}
released={movie.release_date}
id={movie.id} */