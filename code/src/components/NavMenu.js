import React, { useState } from 'react'
import './navmenu.css'

export const NavMenu = (props) => {
  const [movieList, setMovieList] = useState("popular")
  //To toggle class on dropdown button
  const [menuActive, setMenuActive] = useState(false)

  if (menuActive) {

  }

  //Gets the function from MovieList.js with props to pass on the chosen movie list to render
  props.chosenMovieList(movieList)

  //Adds class "active" conditionally to dropdown button depeingin on state true or false
  return (

    <section className="navWrapper">
      <nav role="navigation">
        <div className="dropdown">
          <button className={`dropdownButton ${menuActive ? "active" : ""}`} onClick={() => setMenuActive(!menuActive)}>Choose category</button>
          <div className="dropdownContent">
            <button onClick={() => setMovieList("popular")} >Popular movies</button>
            <button onClick={() => setMovieList("top_rated")}>Top rated movies</button>
            <button onClick={() => setMovieList("upcoming")}>Upcoming movies</button>
          </div>
        </div>
      </nav>
    </section>

  )
}
