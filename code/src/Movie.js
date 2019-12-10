import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import burgers from 'data/burgers.json'


export const Movie = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2a89f9965a48e33d809fbd966cc6a018&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        // setMovies(json)
      })
  }, [movieId])


  // const params = useParams() "This is a hook to get a value and do what we want with it"... What does that mean?
  // const burgerMatch = burgers.find((burgers) => burger.slug === params.slug)
  // console.log(burgerMatch)

  return (
    // <main style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
    <main>
      <div>
        <Link to="/">Go back</Link>
      </div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.overview}</h3>
          </div>
        ))
        }
      </div>
    </main >
  )
}


  //    < div >
  //    // 
  //    // </div >
  //    Här ska det vara en stor background och en mindre bild.
  //  </div >
  //  // < div className = "img-container" >
  //  {/* <Burger name={burgerMatch.name} image={burgerMatch.img} /> */ }
