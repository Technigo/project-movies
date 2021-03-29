import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  
  return (
    <div>
      More info about the movie!
    </div>
  )
}