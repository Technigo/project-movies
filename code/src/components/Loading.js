import React from 'react'
import loadingIcon from '../assets/loading-icon.svg'

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading-img" src={loadingIcon} alt="Loading" />
      <p>Loading...</p>
    </div>
  )
}

export default Loading;