import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e7fa02905a065e6c75198742ec299b55&language=en-US`;
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams

  useEffect(() => {
    fetch(DETAILS_URL)
    .then(response => response.json())
    .then(json => setMovieDetails(json.results))
  },[id]);

  return(
    <>
    <section className="movies-list">
    <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
    {movieDetails.title} - {movieDetails.vote_average}
      <div className="movie-thumb-image-wrapper">
        <p className="movie-thumb-image-description">{movieDetails.overview}</p>
      </div>
    </section>
    </>
  )

}


/* name={movie.title}
background_image={movie.poster_path}
released={movie.release_date}
id={movie.id} */