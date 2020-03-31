import React, { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

import './moviedetail_style.css'


export const MovieDetails = () => {

  const { movieId } = useParams()
  const api_key = "4e2114a81de8aa1d1db942cbcc0d3021"
  const API_LINK_LIST_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`

  const [movie, setMovie] = useState([])



  useEffect(() => {
    fetch(API_LINK_LIST_DETAILS)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [API_LINK_LIST_DETAILS])


  return (
    <div>Movie details</div>
  )

}
