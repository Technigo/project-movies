import React, { useEffect, useState } from 'react'
import { Movies } from '../components/Movies'

export const Upcoming = (props) => {
  const { apiKey, setHeader, loading, setLoading } = props
  const [movies, setMovies] = useState([])
  setHeader('Upcoming movies')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setLoading(false)
      })
  }, [apiKey, setLoading])

  return (
    <>
      {!loading &&
        <section>
          {movies.map((movie, index) => (
            <>
              <Movies {...movie} key={index} />
            </>
          ))}
        </section>
      }
    </>
  )
}