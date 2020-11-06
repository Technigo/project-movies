import React from 'react'

import { Link } from 'react-router-dom'

export const Button = () => {
  return (
    <div>
      <Link to='/'>
        <div className='button'>
          <div className='circle'>
            <div className='arrow'>
            </div>
          </div>
          <p className='button-p'>
            Movies
          </p>
        </div>
      </Link>
    </div>
  )
}

  

