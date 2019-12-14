import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  //Need a state to map the data about movie
  const [company, setCompany] = useState([])
  //To set error state if movie not found
  const [error, setError] = useState(false)

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

  return (
    <main>
      {loading && <LoadingSpinner />}

      {error && <NotFound />}

      {!loading && !error &&
        <section className="companyWrapper">
          <BackToList />
          <div className="companyDetails">
            {company.logo_path === null ? <h1>{company.name}</h1> : <img className="logo" src={`https://image.tmdb.org/t/p/w300${company.logo_path}`} alt={company.name} />}
            <p>{company.name} have their headquarters in {company.headquarters}</p>
            <a href={company.homepage}>Visit {company.name}'s homepage <i className="fas fa-chevron-circle-right"></i></a>
          </div>
        </section>
      }
    </main>
  )
}