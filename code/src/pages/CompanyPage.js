import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { CompanyMovies } from 'components/CompanyMovies'
import { CompanyLink } from 'components/CompanyLink'
import { Error } from 'components/Error'

export const CompanyPage = () => {
  //useParams will return an object of key/value pairs from the app URL that is set to be dynamic 
  //Gives parameters of the current route and eliminates need to use the component props pattern
  const { companyId } = useParams()
  const [company, setCompany] = useState({}) //Used to store company object from GET request
  const [loading, setLoading] = useState(true) //Loading state to show LoadingSpinner when waiting for promise to be resolved
  const [error, setError] = useState(false) //Used to set error state if movie id is invalid

  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`
  const imgSrc = `https://image.tmdb.org/t/p/w500${company.logo_path}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34 || json.status_code === 404) {
          setError(true) //Will allow Error component to be rendered if status code is 34 or 404
        } else {
          setCompany(json) //Changes state of company with use of json from GET request
        }
        setLoading(false) //LoadingSpinner gets hidden as a result
      })
  }, [url, companyId]) //Sends new GET request to API if different company is chosen and the id is changed

  //When the site is no longer loading and the spinner is hidden and the CompanyLink and CompanyMovies component are rendered.
  //If there's an error the Error component is rendered
  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <Error />}
      {!loading && !error &&
        <>
          <CompanyLink
            homepage={company.homepage}
            logo_path={company.logo_path}
            imgSrc={imgSrc}
            name={company.name} />
          <CompanyMovies />
        </>
      }
    </>
  )
}