import React from "react"
import { Link, NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../media/logo2.svg"
import "./css/Nav.css"

export const Nav = (props) => {
  // const [pickedCategory, setPickedCategory] = useState("popular")

  // props.hej(pickedCategory) // För vi ut pickedCategory till ML?

  return (
    <div>

      <ul className="navbar">
        <NavLink className="logo" to="/"><Logo />Home</NavLink>
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
    </div>
  )

}