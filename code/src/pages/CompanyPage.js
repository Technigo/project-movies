import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { LoadingSpinner } from 'components/LoadingSpinner'
import './companypage.css'

export const CompanyPage = () => {
  const { companyId } = useParams()
  const [company, setCompany] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`

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

  console.log(company)
  return (
    <>
      {loading && <LoadingSpinner />}
      {notFound && <NotFound />}
      {!loading && !notFound &&
        <div className="company-wrapper">
          <img className="company-image" src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt={company.name} />
          <h2>{company.name}</h2>
          <h3>{company.headquarters}</h3>
          <a href={company.homepage}>Visit company website</a>
        </div>

      }
    </>
  )
}