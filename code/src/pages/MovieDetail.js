import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const MovieDetail = () => {

  //get the parameter from the URL
  const { movieId } = useParams();
  const [currentMovie, setcurrentMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Get the movie detail for the selected movie using the movieID param from the URL
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setIsLoading(false);
      setcurrentMovie(json);
    })
  },[movieId])

  return ( <>
  {!isLoading && currentMovie &&
    <section 
      className="movie-detail-container" 
      key={currentMovie.id}
      style={{  
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <Link className="link-back" to="/"><span role="img" aria-label="back-arrow"><span role="img" aria-label="arrow-emoji">⬅️</span> </span>Movies start</Link>
        
        <div className="movie-details-wrapper">
       <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${currentMovie.poster_path}`} alt={currentMovie.title} />
        <div className="movie-details-text">
        <h1 className="movie-detail-title">{currentMovie.title}</h1> 
        <p className="movie-tagline">{currentMovie.tagline}</p>
          <h2 className="movie-detail-rating">Rating: {currentMovie.vote_average}</h2> 
          <p className="movie-detail-overview">{currentMovie.overview}</p>
          <a className="imdb-link" href={`https://www.imdb.com/title/${currentMovie.imdb_id}/`} alt="imdb-link" target="_blank" rel="noopener noreferrer">IMDB <span role="img" aria-label="link-emoji">🔗</span> </a>
          <Link className="similar-movies-link" to= {`/movies/${movieId}/similarMovies`}>Explore recommended movies <span role="img" aria-label="heart-eyes-emoji">😍</span> </Link>
        </div>
        </div>
    </section>}
    </>
  )
}