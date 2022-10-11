import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([''])
  // useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=70e43da479b5b8f5a366a40753e1b1e3&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results)
    })
  // })
  return (
    <div className="movieContainer">
      {movies.map((prop) => (
        <section className="movieName" key={prop.id}>
          <h1>{prop.title}</h1>
          <h1>{prop.release_date}</h1>
        </section>
      ))
      };
    </div>
  )
}
