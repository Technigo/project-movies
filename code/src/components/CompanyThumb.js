import React from 'react'
import { Link } from 'react-router-dom'

const CompanyThumb = ({ name, id }) => {
  return (
    <Link className="company-link" to={`/companies/${id}`}>
      {name}
    </Link>
  )

}

export default CompanyThumb