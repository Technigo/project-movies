import React, { useState, useEffect } from 'react'

const APIKEY = '72df873fd7965d1098248531e4dddca6'

const POSTERSIZE = 'w500'

export const App = () => {

  const [movies, setMovies] = useState([])
    



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.results)
      setMovies(json.results)
    })
  }, [])
  return (
    <section>
      {movies.map((movie, index) => {
        return (
          <article key={index}>
            <img 
              src={`https://image.tmdb.org/t/p/${POSTERSIZE}${movie.poster_path}`} 
              alt={`Poster for ${movie.title}`}
            ></img>
            <div className="overlay">
              <div className="description">
                <h3>{movie.title}</h3>
                <p>Released {movie.release_date}</p>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
