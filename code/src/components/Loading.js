import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loading-screen">
      <RotatingLines
        visible
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        strokeColor="grey" />
    </div>
  )
}

export default Loading