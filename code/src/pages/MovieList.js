import React, { useEffect, useState } from 'react'
import { MovieThumb } from 'pages/MovieThumb'

export const MovieList = () => {
  const [movies, setMovies] = useState ([])

  // const API_KEY = "2daaca936846f43789b6e1ecfb7b4249"
  // const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2daaca936846f43789b6e1ecfb7b4249&language=en-US&page=1'    
  

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=2daaca936846f43789b6e1ecfb7b4249&language=en-US&page=1')
      .then((response) => response.json())
      .then((json) => setMovies(json.results))
  }, [])


  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MovieThumb
        key={movie.id}
        {...movie}
      />
        ))}
        {/* // <div key={movie.id}>
        //   <h2>{}</h2>
        //   <h3>
        //     <Link>
        //       {results.title}
        //     </Link>
        //     </h3>
        // </div> */}
    </section>
    )
}













// export const Movielist = () => {
//     const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key={2daaca936846f43789b6e1ecfb7b4249}&language=en-US&page=1'
//     const MOVIE_DETAILS_URL = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key={2daaca936846f43789b6e1ecfb7b4249}&language=en-US'
//     const [movies, setMovies] = useState([])

//     fetch(POPULAR_MOVIES_URL)
//     .then((response) => response.json())
//     .then((json) => setMovies(json.results))

//     return (
//         <section className="movies-list"> 
//         {movies.map((movie) => (
//             <MovieThumb 
//             key={movie.id} 
//             name={movie.name} 
//             background_image={movie.background_image}
//             rating={movie.rating}
//             />
//         ))}
//         </section>
//     )
// }

