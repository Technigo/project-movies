import React from 'react'
import './companylink.css'

//If the company has a homepage, the logo or company name will link to the homepage
//If not, the logo or company name will only be displayed
export const CompanyLink = ({ homepage, logo_path, imgSrc, name }) => {
  return (
    <div className="company-link">
      {homepage ?

        <a href={homepage}>
          {logo_path ? <img className="company-image" src={imgSrc} alt={name} /> : <h2 className="company-name-nav">{name}</h2>}
        </a>

        :

        <>
          {logo_path ? <img className="company-image" src={imgSrc} alt={name} /> : <h2 className="company-name-nav">{name}</h2>}
        </>

      }
    </div>
  )
}