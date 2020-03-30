import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { CompanyMovies } from 'components/CompanyMovies'
import { CompanyLink } from 'components/CompanyLink'

export const CompanyPage = () => {
  const { companyId } = useParams()
  const [company, setCompany] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`
  const imgSrc = `https://image.tmdb.org/t/p/w500${company.logo_path}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34 || json.status_code === 404) {
          setNotFound(true)
        } else {
          setCompany(json)
        }
        setLoading(false)
      })
  }, [url, companyId])



  return (
    <>
      {loading && <LoadingSpinner />}
      {notFound && <NotFound />}
      {!loading && !notFound &&
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