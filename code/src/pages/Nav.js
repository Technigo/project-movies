import React from "react"
import { NavLink } from "react-router-dom"
import "./css/Nav.css"

export const Nav = (props) => {
  // const [pickedCategory, setPickedCategory] = useState("popular")

  // props.hej(pickedCategory) // För vi ut pickedCategory till ML?

  return (
    <ul className="navbar">
      {/* <li>
        <NavLink to="/">MOVIE TIME</NavLink>
      </li> */}
      <li>
        <NavLink to="/popular">Popular movies</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming">Upcoming movies</NavLink>
      </li>
      <li>
        <NavLink to="/top_rated">Top Rated movies</NavLink>
      </li>
    </ul>
  )

}