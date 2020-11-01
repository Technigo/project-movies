import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const MovieDetail = () => {

  //get the parameter from the URL
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  //Get the movie detail for the selected movie using the movieID param from the URL
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setMovie(json);
    })
  },[movieId])




  return (
    <div 
      className="movie-detail-container" 
      key={movie.id}
      style={{  
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    
      }}
      >

      <Link className="link-back" to="/"><span role="img" aria-label="back-arrow">⬅️ </span>Go back</Link>
     { /*
      <img className="movie-backdrop-image" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
     */} 
        
        <div className="movie-details-wrapper">
        <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-details-text">
        <h1 className="movie-detail-title">{movie.title}</h1> 
          <h2 className="movie-detail-rating">{movie.vote_average}</h2> 
          <p className="movie-detail-overview">{movie.overview}</p>
        </div>
        
        </div>
    
     
    </div>
  )
}