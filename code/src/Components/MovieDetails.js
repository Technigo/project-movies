import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NotFound } from './NotFound'

export const MovieDetails = () => {
 const [movieDetails, setMovieDetails] = useState([]);
 const { id } = useParams()

 /* To round rating number to one decimal */
 { /* const roundedNumber = Math.round(movieDetails.vote_average * 10) / 10 */ }
 const FetchDetails = () => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US`)
   .then((response) => response.json())
   .then((data) => setMovieDetails(data))
   .catch((error) => {
    console.log(error)
    if (error) {
     return (<NotFound />
     )
    }
   })
 }

 useEffect(() => {
  FetchDetails()
 }, [])

 return (
   
 )
};