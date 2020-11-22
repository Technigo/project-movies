import React, { useEffect, useState } from 'react'

import { MovieCard } from '../components/MovieCard'

export const MovieList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=0db2a5ac0c510ce6221cadf605f4d3e6&language=en-US&page=${pageNumber}`
  const [movies, setMovies] = useState([])

  // This one doesn't really work as I intended, but I can't figure out why. You need to press "Next" twice before it actually changes that page. I commented out the console.log's for now, since I might get back to it later.
  const changePage = (operator) => {
    if (operator === "plus") {
      // console.log(`BEFORE SETPAGENUMBER: Inside ~IF~, Page number is: ${pageNumber}`)
      let i = pageNumber + 1
      setPageNumber(i)
      // console.log(`AFTER SETPAGENUMBER ~IF~, 'i' is: ${i}`)
      // console.log(`2: Inside ~IF~, Page number is: ${pageNumber}`)
      fetchAPI()

    } else if ((operator === "minus") & (pageNumber !== 1)) {
      // console.log(`BEFORE SETPAGENUMBER: Inside ~ELSE IF~, Page number is: ${pageNumber}`)
      let i = pageNumber - 1
      setPageNumber(i)
      // console.log(`Inside ~ELSE IF~, 'i' is: ${i}`)
      // console.log(`Inside ~ELSE IF~, Page number is: ${pageNumber}`)
      fetchAPI()

    } else {
      // console.log("Do nothing?")
      // console.log(`Inside ~ELSE~, pageNumber is: ${pageNumber}`)
      fetchAPI()
    }
  }

  const fetchAPI = () => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }

  useEffect(() => {
    fetchAPI()
  }, [])


  return (
    <main className="full-screen">
      <section className="header-nav">
        <button onClick={() => changePage("minus")}><p>Previous</p></button>
        <button onClick={() => changePage("plus")}><p>Next</p></button>
      </section>
      <section className="movie-grid">

        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        ))}

      </section>
    </main>
  )

}