import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./css/Nav.css"

export const Nav = (props) => {
  const [pickedCategory, setPickedCategory] = useState("popular")

  props.chosenCategory(pickedCategory)

  return (
    <ul className="navbar">
      {/* <li>
        <NavLink to="/">MOVIE TIME</NavLink>
      </li> */}
      <li onClick={() => setPickedCategory("popular")}>
        <NavLink to="/popular">Popular movies</NavLink>
      </li>
      <li onClick={() => setPickedCategory("upcoming")}>
        <NavLink to="/upcoming">Upcoming movies</NavLink>
      </li>
      <li onClick={() => setPickedCategory("top_rated")}>
        <NavLink to="/top_rated">Top Rated movies</NavLink>
      </li>
    </ul>
  )

}