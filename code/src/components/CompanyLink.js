import React from 'react'
import './companylink.css'

export const CompanyLink = ({ homepage, logo_path, imgSrc, name }) => {
  return (
    <div className="company-link">
      {homepage !== '' ?
        <a href={homepage}>
          {logo_path !== null ? <img className="company-image" src={imgSrc} alt={name} /> : <h2 className="company-name-nav">{name}</h2>}
        </a>
        :
        <>
          {logo_path !== null ? <img className="company-image" src={imgSrc} alt={name} /> : <h2 className="company-name-nav">{name}</h2>}
        </>
      }
    </div>
  )
}