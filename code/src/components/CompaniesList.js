import React from 'react'
import { Link } from 'react-router-dom'

const CompaniesList = ({companies}) => {
  return (
    <section className="companies-container">
      {companies.map((company, index, companies) => {
        if(index < companies.length - 2){
          return <Link key={company.id} className="company-link" to={`/companies/${company.id}`}>{company.name}, </Link>
        }
        if(index === companies.length - 2) {
          return <Link  key={company.id} className="company-link" to={`/companies/${company.id}`}>{company.name} &</Link>
        } 
        return <Link key={company.id} className="company-link" to={`/companies/${company.id}`}> {company.name} </Link>
      })}
    </section>
  )
}

export default CompaniesList