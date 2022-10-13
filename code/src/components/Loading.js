import React from 'react'
import loadingIcon from './loading-icon.svg'

const Loading = () => {
  return (
    <div className="loading">
      <p>Loading Loading Loading ...</p>
      <img src={loadingIcon} alt="Loading" />
    </div>
  )
}

export default Loading;