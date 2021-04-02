import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'

import { useParams, useHistory } from 'react-router-dom'

import { COMPANY_URL } from '../reusables/urls'

const CompanyPage = () => {
  const [company, setCompany] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const history = useHistory()

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(COMPANY_URL(id))
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then(receivedCompany => {
        setCompany(receivedCompany)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
      })
  }, [id])
  if (error) {
    history.goBack()
  }
  if (loading) {
    return (
      <Loader
        className="loader"
        type="ThreeDots"
        color="#ffffff"
        width={100}
        height={100}
      />
    )
  } else {
    return (
      <>
        {company && (
          <section className="company-card">
            <div className="company-details">
              <h1 className="company-name">{company.name}</h1>
              <p className="headquarters">{company.headquarters}</p>
              <a href={company.homepage} className="homepage-link">Homepage (external link)</a>
            </div>
            {company.logo_path && <img className="company-logo" src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={company.name} />}
            
          </section>
        )}
      </>
    )
  }
}

export default CompanyPage