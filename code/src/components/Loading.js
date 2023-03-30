import React from 'react'
import './loading.css'

export const Loading = () => {
  return (
    <div className="loader-container">
      <span className="loader" />
      <p>Loading movies...</p>
    </div>
  )
}