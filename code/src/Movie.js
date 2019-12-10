import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import burgers from 'data/burgers.json'

import 'Movie.css'

export const Movie = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2a89f9965a48e33d809fbd966cc6a018&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setMovies(json)
      })
  }, [movieId])

  console.log(movies.overview)
  // const params = useParams() "This is a hook to get a value and do what we want with it"... What does that mean?
  // const burgerMatch = burgers.find((burgers) => burger.slug === params.slug)
  // console.log(burgerMatch)

  return (
    <article className="about-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
      <Link to="/">Go back</Link>
      <section class="details">
        <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} />
        <h3>{movies.overview}</h3>
      </section>
    </article >
  )
}


  //    < div >
  //    // 
  //    // </div >
  //    Här ska det vara en stor background och en mindre bild.
  //  </div >
  //  // < div className = "img-container" >
  //  {/* <Burger name={burgerMatch.name} image={burgerMatch.img} /> */ }
