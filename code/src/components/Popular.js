import React, { useState, useEffect } from 'react'
import { MOVIELIST } from 'Urls.js/url'
import { Link } from 'react-router-dom'

const Popular = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(MOVIELIST)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
  }, [])

  // console.log(data.results)
  return (
    <section className="movie-list">
      {list.map((movie) => (
        <Link
          key={movie.title}
          className="movie-card"
          to={`/details/${movie.id}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Popular
