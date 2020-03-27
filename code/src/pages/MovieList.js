import React, { useState, useEffect } from 'react'

const API = 'https://api.themoviedb.org/3/movie/popular?api_key=83328e75221cc6b9f332da9a39a408f8&language=en-US&page=1'

export const MovieList = () => {
  // const [popularMovies, setPopularMovies] = useState('')

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => console.log(json.results[0].title))
  }, [])

  return (
    <section>
      {/* {popularMovies.map((movie) => (
         <div className="movie-cards">
           key={movie.id}
             popularMovies={popularMovies}

        </div>))} */}
    </section>
  )
}