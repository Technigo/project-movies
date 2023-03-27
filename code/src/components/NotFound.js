import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const returnToDefaultPage = () => {
    navigate('/')
  }

  return (
    <div className="error-message-container">
      <p className="error-message">Oops! We can&apos;t seem to find the page you&apos;re looking for </p>
      <button className="link-to-main" type="button" onClick={returnToDefaultPage}>Go back to main page</button>
    </div>
  )
}

export default NotFound