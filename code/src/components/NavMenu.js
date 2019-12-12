import React, { useState } from 'react'
import './navmenu.css'

export const NavMenu = ({ chosenMovieList, chosenList }) => {
  //To toggle class on dropdown button
  const [menuActive, setMenuActive] = useState(false)

  //Adds class "active" conditionally to dropdown button depending on state true or false
  return (

    <section className="navWrapper">
      {chosenList === "popular" && <h1>Most popular movies</h1>}
      {chosenList === "top_rated" && <h1>Top rated movies</h1>}
      {chosenList === "upcoming" && <h1>Upcoming movies</h1>}
      <nav role="navigation">
        <div className="dropdown">
          <button className={`dropdownButton ${menuActive ? "active" : ""}`} onClick={() => setMenuActive(!menuActive)}>Choose category</button>
          <div className="dropdownContent">
            <button onClick={() => chosenMovieList("popular")} >Popular movies</button>
            <button onClick={() => chosenMovieList("top_rated")}>Top rated movies</button>
            <button onClick={() => chosenMovieList("upcoming")}>Upcoming movies</button>
          </div>
        </div>
      </nav>
    </section>

  )
}
