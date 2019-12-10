import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { detailId } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${detailId}?api_key=7bad066f3ffa3daf68ae80d43ff12b31&language=en-US`
  
  const [ details, setDetails ] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json.homepage)
      })
  }, [detailId])
  
  return (
  <div>{details}</div>
      
      )
}

