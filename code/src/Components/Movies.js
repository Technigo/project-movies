//map all the movies 

import React, { useState, useEffect } from 'react';
import { BroswerRouter, Routes, Route } from "react-router-dom"

export const Movies = () => {
  const [movieList, setMovieList] = useState([]); // empty array for input
  const [loading, setLoading] = useState(false);// loading check
  /* const [page, setPage] = useState(1) */
  const movie_url = "https://api.themoviedb.org/3/movie/popular?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US"
  
  useEffect(() => {
    setLoading(true);
    fetch(movie_url)
      .then((res) => res.json())
      .then((data) => {setMovieList(data)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])
  
  return(
    <div>
      {movieList.map((item) => (
        <div>key={item.results}</div>
      ))}
      </div>
  )
}
