import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { LoadingSpinner } from '../components/LoadingSpinner'

export const CompanyMovies = () => {
  //useParams will return an object of key/value pairs from the app URL that is set to be dynamic 
  //Gives parameters of the current route and eliminates need to use the component props pattern
  const { companyId } = useParams()
  const [companyMovies, setCompanyMovies] = useState([]) //Used to store array of movies from GET request
  const [loading, setLoading] = useState(true) //Loading state to show LoadingSpinner when waiting for promise to be resolved
  const fliteredCompanyMovies = companyMovies.filter(movie => movie.poster_path) //Filtered movie array, removes movies without poster img from listed movies

  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCompanyMovies(json.results) //Changes state of companyMovies with use of json from GET request
        setLoading(false) //LoadingSpinner gets hidden as a result
      })
  }, [url, companyId])

  //When the site is no longer loading and the spinner is hidden and the movie-container with listed movies is displayed
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