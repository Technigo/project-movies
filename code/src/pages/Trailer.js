import React from 'react'

export const Trailer = (props) => {
  const { trailer } = props


  return (
    <>
      {trailer && (
        <iframe width="420" height="345" src={`https://www.youtube.com/embed/${trailer[0].key}`}>
        </iframe>)}
    </>
  )
}