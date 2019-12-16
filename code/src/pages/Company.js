import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { NotFound } from 'components/NotFound'
import { BackToList } from 'components/BackToList'
import './company.css'

export const Company = () => {

  //Destructuring to get the company id key from the url params, called id beacuse that is what we named it in the path in App.js
  const { companyId } = useParams()

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Loading state to show loading mean while API is fetched
  const [loading, setLoading] = useState(true)
  //Need a state to map the data about company
  const [company, setCompany] = useState([])
  //Need a state to map the movies from that company
  const [companyMovies, setCompanyMovies] = useState([])
  //To set error state if movie not found
  const [error, setError] = useState(false)

  //Fetching company details
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`)
      .then((res) => res.json()) //Get the json of company
      .then((json) => {
        if (json.status_code === 34) {
          setError(true)
        } else {
          setCompany(json)
        }
        setLoading(false)
      })
  }, [companyId])

  //Fetching movies by company
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_companies=${companyId}`)
      .then((res) => res.json()) //Get the json of company
      .then((json) => {
        setCompanyMovies(json.results)
      })
  }, [companyId], [companyMovies])

  return (
    <main>
      {loading && <LoadingSpinner />}

      {error && <NotFound />}

      {!loading && !error &&
        <section className="companyWrapper">
          <BackToList />
          <div className="companyDetails">
            {company.logo_path === null ? <h1>{company.name}</h1> : <img className="logo" src={`https://image.tmdb.org/t/p/w300${company.logo_path}`} alt={company.name} />}
            <p>{company.name} have their headquarters in {company.headquarters}. Check out some of their movies!</p>
            <a href={company.homepage}>Visit {company.name}'s homepage <i className="fas fa-chevron-circle-right"></i></a>
          </div>

          <div className="companyMovies">
            {companyMovies.map((movies) => (
              <article className="movieCard" key={movies.id}>
                <Link to={`/movies/${movies.id}`} replace>
                  {movies.poster_path === null ? <h1 className="altMovieTitle">{movies.title}</h1> : <img className="movieCardPoster" src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />}
                  <div className="movieCardDetails">
                    <h1>{movies.title}</h1>
                    <h2>Release: {movies.release_date}</h2>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      }
    </main>
  )
}