
import React from "react"
import { useParams } from "react-router-dom"

const MovieDetails = () =>{
  const { id } = useParams();

  return <section>{id}</section>
}

export default MovieDetails;