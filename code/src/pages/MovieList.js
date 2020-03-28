import React, { useState, useEffect } from 'react'

const API = 'https://api.themoviedb.org/3/movie/popular?api_key=83328e75221cc6b9f332da9a39a408f8&language=en-US&page=1'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])
  return (
    <div className="movie-card">
      {movies.map(movie => {
        return (
          <div className="movie">
            <div>
              <div className="movie-image" key={movie.id}>
                <a href="">
                  <div className="overlay">
                    <div className="details">
                      <h3>{movie.title} </h3>
                      <h4>Released {movie.release_date} </h4>
                    </div>
                  </div>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt="album cover" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};





// return (
//   <div>
//     <div className="movieList">
//       {movies.map((movie) => (
//         <div className="movieCard" key={movie.id}>
//           <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster" />

//           <div className="listDetails"><h3>{movie.title} </h3>

//           </div>

//         </div>
//       ))}
//     </div>
//   </div>
// )