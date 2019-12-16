import React, { useState, useEffect } from 'react'


const apiKey = "77bea6b3bafb30d9ed8c7a03c3e8d404"

export const NavBar = () => {
  const [category, setCategory] = useState('popular')


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => setCategory(json.results))
  }, [category])
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  )
}