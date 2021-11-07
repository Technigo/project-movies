import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {

  const history = useHistory()
  
  const onButtonClick = () => {
    history.push('/')
  }


  return (
    <div className="errorContainer">
      <p>Sorry, there is no such page!</p>
      <button onClick={onButtonClick}>Back to the home page</button>
    </div>
  )
}

export default NotFound