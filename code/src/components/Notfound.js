import React from 'react'
import { useNavigate } from 'react-router-dom'
import Backicon from './Backicon'

const NotFound = () => {
  const navigate = useNavigate()
  const onHomeButtonClick = () => {
    navigate('/')
  }

  return (
    <section className="error-container">
      <button onClick={onHomeButtonClick}>
        <h2>Fel</h2>
        <Backicon />
      </button>
    </section>
  )
}

export default NotFound
