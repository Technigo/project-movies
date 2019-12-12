import React, { useState } from "react"
import "components/navbar.css"
export const NavBar = (props) => {
  const [category, setCategory] = useState("top_rated");

  props.chosenMovieList(category)

  return (
    <div className="category-dropdown">
      <label>
        <h3>select list</h3>
        <select className="select-css"
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value="top_rated">Top rated movies</option>
          <option value="popular">Most popular movies</option>
          <option value="upcoming">Upcoming movies</option>
          <option value="now_playing">Now playing movies</option>
        </select>
      </label>
    </div>
  )
}