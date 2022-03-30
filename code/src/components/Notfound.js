import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from './Back'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <section className="error-container">
      <Link to="/404" className="back-link-404">
        <Back />
      </Link>
    </section>
  )
}

export default NotFound
