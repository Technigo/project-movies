
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { CgSmileSad } from 'react-icons/cg'
import { FaCity } from 'react-icons/fa'
import { API_KEY } from '../utils/urls';
import BackButton from './BackButton'
import companyBackground from './companyBackground.png'

const Companies = () => {
  const [company, setCompany] = useState({})
  const { companyID } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/company/${companyID}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCompany(data))
  }, [companyID])

  return (

    <div className="single-company-page">
      <img className="company-background-img" src={companyBackground} alt="company background" />
      <BackButton />
      <div className="single-company-page-img-details-container">
        <h1 className="single-company-page-name">{company.name}</h1>
        {company.logo_path !== undefined && company.logo_path !== null
          ? <img className="single-company-page-img" src={`https://image.tmdb.org/t/p/w780${company.logo_path}`} alt={`${company.name}_image`} /> : <p style={{ color: 'white' }}>The image is not available <CgSmileSad /></p>}
        <div className="single-company-page-details">
          <p className="single-company-page-headquarters"><FaCity /> : {company.headquarters}</p>
          <a className="single-company-page-homepage" href={company.homepage} target="_blank" alt="company's homepage" rel="noreferrer"> <span>Go to homepage</span></a>
        </div>
      </div>
    </div>
  )
}

export default Companies;