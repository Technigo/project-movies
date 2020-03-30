import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from 'components/MovieCard'
import { LoadingSpinner } from 'components/LoadingSpinner'

export const CompanyMovies = () => {
  const [companyMovies, setCompanyMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const { companyId } = useParams()
  const fliteredCompanyMovies = companyMovies.filter(movie => movie.poster_path !== null) //Removes movies without poster img from the listed movies

  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCompanyMovies(json.results)
        setLoading(false)
      })
  }, [url, companyId])

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        <div className="movie-container">
          {fliteredCompanyMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date} />
          ))}
        </div>
      }
    </>
  )
}