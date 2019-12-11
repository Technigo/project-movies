import React, { useState } from 'react'
import './nav.css'

export const Nav = (props) => {
  const [movieList, setMovieList] = useState("popular")

  //Gets the function from MovieList.js with props to pass on the chosen movie list to render
  props.chosenMovieList(movieList)

  return (

    <section className="navWrapper">
      <form>
        <label>
          <h3>Select a list</h3>
          <div className="selectMain">
            <select
              onChange={event => setMovieList(event.target.value)}
              value={movieList}
            >
              <option value="popular">Popular movies</option>
              <option value="top_rated">Top rated movies</option>
              <option value="upcoming">Upcoming movies</option>
            </select>
          </div>
        </label>
      </form>
    </section>

  )
}