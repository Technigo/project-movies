import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const params = useParams()
  const [details, setDetails] = useState([''])
  console.log(params)
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=70e43da479b5b8f5a366a40753e1b1e3&language=en-US')
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
        console.log('hej')
      })
  })



  return (
    <div>Productpage</div>
  )
}