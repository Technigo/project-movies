import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BackButton } from 'BackButton'

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [currentMovie, setcurrentMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404');
      }
    })
    .then((json) => {
      setIsLoading(false);
      setcurrentMovie(json);
    })
    .catch(() => {
      window.location.assign('/404');
    });
  },[movieId])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404');
      }
    })
    .then((json) => {
      setCastList(json.cast);
    })
    .catch(() => {
     window.location.assign('/404');
    });
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
 
      <BackButton text="Go back"></BackButton>
        <div className="movie-details-wrapper">
          <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/w342${currentMovie.poster_path}`} alt={currentMovie.title} />
            <div className="movie-details-text">
              <h1 className="movie-detail-title">{currentMovie.title}</h1> 
                <p className="movie-tagline">{currentMovie.tagline}</p>
                <h2 className="movie-detail-rating">Rating: {currentMovie.vote_average}</h2> 
                <p className="movie-detail-overview">{currentMovie.overview}</p>

                  <div className="movie-details-cast-list">
                    {castList.slice(0,5).map((actor,index) => (
                      <Link key={index} className="cast-link" to={`/movies/${movieId}/cast/${actor.id}`}>{actor.name}</Link>
                    ))}
                  </div>
         
                <a className="imdb-link" href={`https://www.imdb.com/title/${currentMovie.imdb_id}/`} alt="imdb-link" target="_blank" rel="noopener noreferrer">IMDB <span role="img" aria-label="link-emoji">🔗</span> </a>
                <Link className="similar-movies-link" to= {`/movies/${movieId}/recommendedMovies`}>Explore recommended movies <span role="img" aria-label="heart-eyes-emoji">😍</span> </Link>
            </div>
        </div>
    </section>}
    </>
  )
}