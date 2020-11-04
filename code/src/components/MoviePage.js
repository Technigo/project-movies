import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'


export const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([]); 
  
  //We use [] in the Use state hook since it will be returning an array
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3bc84b0ae751d27c186bde28023ce8fe&language=en-US`
  useEffect(() => {
    fetch( MOVIE_URL )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [movieId])

  return (
    <>
      <Link to ="/" exact='true'>
        <p className='back-button'><span>&lt;</span><span>MOVIE LIST</span></p>
      </Link>
      <section>
        <div 
          className="movie-page-background" 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <div>
            <img src= {`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title}/>
            <div>
              <h2>{movie.original_title}</h2>
              <p><span role='img' aria-label='star'>⭐</span>{`${movie.vote_average} /10`}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </section> 
    </>
      )
}

