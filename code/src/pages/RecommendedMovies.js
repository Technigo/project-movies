import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const RecommendedMovies = () => {

  const { movieId } = useParams();
  const[ recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
   .then((res) => res.json())
   .then((json) => {
     console.log(json.results);
     setRecommendedMovies(json.results);
   })
  },[movieId])

  return (
    <section className="app-container">
    <Link className="link-back" to={`/movies/${movieId}`}><span role="img" aria-label="back-arrow">⬅️ </span>Back to movie</Link>
    {recommendedMovies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-link">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info-container">
        <h2 className="movie-title">{movie.title}</h2>
        <h2 className="movie-release-date">Release date: {movie.release_date}</h2>
        </div>
    </Link>    
    ))}
    </section>
  )
}