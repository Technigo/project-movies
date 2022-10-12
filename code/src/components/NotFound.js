import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const returnToDefaultPage = () => {
    navigate('/')
  }

  return (
    <div>
      <p>not found</p>
      <button type="button" onClick={returnToDefaultPage}> Go to Homepage</button>

    </div>
  );
}

export default NotFound