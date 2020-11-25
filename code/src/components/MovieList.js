import React, { useEffect, useState } from 'react'

import { MovieThumb } from './MovieThumb'

export const MovieList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const API_KEY = 'c03059469ca2a2b2651ea90d6f8361ab'
    const LIST_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&region-SE&page=1`

    fetch(LIST_API)
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