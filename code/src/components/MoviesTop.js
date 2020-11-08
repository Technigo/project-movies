import React, { useEffect, useState } from 'react'

import { MovieThumb } from './MovieThumb'

export const MoviesTop = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const APIKey = 'c03059469ca2a2b2651ea90d6f8361ab'
    const listAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&region-se&page=1`

    fetch(listAPI)
      .then((response) => response.json())
      .then((json) => {
        setList(json.results)
      })
  }, [])

  return (
    <section className="movie-list">
      {list.map((movie) => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </section>
  )
}