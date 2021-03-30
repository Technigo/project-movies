import React from 'react'
import { useParams } from 'react-router'

export const MovieDetails = () => {
  const {id} = useParams();
  return (
    <p>Prutt{id}</p>
  )
}