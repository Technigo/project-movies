import React, { useEffect, useState } from 'react'

export const MovieDetails = () => {
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e7fa02905a065e6c75198742ec299b55&language=en-US&page=1";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(json => setMovies(json.results))
  },[]);

  return(
    <>
    <section className="movies-list">
    <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
    {movie.title} - {movie.vote_average}
      <div className="movie-thumb-image-wrapper">
        <p className="movie-thumb-image-description">{movie.overview}</p>
      </div>
    </section>
    </>
  )

}


/* name={movie.title}
background_image={movie.poster_path}
released={movie.release_date}
id={movie.id} */