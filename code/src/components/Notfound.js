import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Backicon from './Backicon'

const NotFound = () => {
  const navigate = useNavigate()
  // const onHomeButtonClick = () => {
  //   navigate('/')
  // }

  return (
    <section className="error-container">
       <Link to="/" className="back-link">
          <Backicon /> Home
        </Link>
      <h2 className="error-text">Sorry, this movie was not found</h2>
    </section>
  )
}

export default NotFound
