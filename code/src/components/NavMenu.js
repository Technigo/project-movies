import React, { useState } from 'react'
import './navmenu.css'

export const NavMenu = ({ chosenMovieList, chosenList }) => {
  //To toggle class on dropdown button
  const [menuActive, setMenuActive] = useState(false)


  //To show different headlines
  let currentList
  if (chosenList === "popular") {
    currentList = "Most popular movies"
  } else if (chosenList === "top_rated") {
    currentList = "Top rated movies"
  } else if (chosenList === "upcoming") {
    currentList = "Upcoming movies"
  }

  //Adds class "active" conditionally to dropdown button depending on state true or false
  return (

    <section className="navWrapper">
      <h1>{currentList}</h1>
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
