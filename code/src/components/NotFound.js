import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/')
  }
  return (
    <div className="not-found-page">
      <p>Sorry, this page does not exist</p>
      <button type="button" onClick={returnToDefaultPage}>Go to default page</button>
    </div>
  )
}

export default NotFound