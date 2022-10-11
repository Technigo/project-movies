import React, { useState, useEffect } from 'react';

export const ProductPage = () => {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=70e43da479b5b8f5a366a40753e1b1e3&language=en-US')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  })

  return (
    <div>Productpage</div>
  )
}