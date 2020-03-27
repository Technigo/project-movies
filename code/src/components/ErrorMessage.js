import React from 'react'
import { FailedTo } from './Failed'

export const ErrorMessage = () => {
  return (
    <div classNAme="error">
      <FailedTo />
        <div className="errorMessage">
          <h2>Nothing to see here...</h2>
        </div>
    </div>
  )
}