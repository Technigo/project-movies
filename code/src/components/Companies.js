
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { CgWebsite } from 'react-icons/cg'
import { FaCity } from 'react-icons/fa'
import { API_KEY } from '../utils/urls';
import BackButton from './BackButton'

const Companies = () => {
  const [company, setCompany] = useState({})
  const { companyID } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/company/${companyID}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCompany(data))
  }, [companyID])

  return (
    <div className="single-company-page" style={{ backgroundImage: 'url(images/company.jpg)' }}>
      <BackButton />
      <div className="single-company-page-img-details-container">
        <h1 className="single-company-page-name">{company.name}</h1>
        {company.logo_path !== undefined && <img className="single-company-page-img" src={`https://image.tmdb.org/t/p/w780${company.logo_path}`} alt={`${company.name}_image`} />}
        <div className="single-company-page-details">
          <p className="single-company-page-headquarters"><FaCity /> : {company.headquarters}</p>
          <p className="single-company-page-homepage"><CgWebsite /> : {company.homepage}</p>
        </div>
      </div>
    </div>
  )
}

export default Companies;