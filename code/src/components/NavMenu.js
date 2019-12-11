import React, { useState } from 'react'
import './navmenu.css'

export const NavMenu = (props) => {
  const [movieList, setMovieList] = useState("popular")

  //Gets the function from MovieList.js with props to pass on the chosen movie list to render
  props.chosenMovieList(movieList)

  return (

    <section className="navWrapper">
      <nav role="navigation">
        <div className="dropdown">
          <button className="dropdownButton">Choose cathegory</button>
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
