import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

export const MovieList = ({ category = 'popular' }) => {
  const [movie, setMovie] = useState([])
  /*const [category, setCategory] = useState('popular')*/
  const history = useHistory()


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=5f46f973d5f08b9bd274a88659f1c2e6&language=en-US&page=1`)
    .then (res => res.json())
    .then(json => setMovie(json.results))
  }, [category])


  return (

    <section className="movieSection">
      <select value={category} onChange={(e) => history.push(`/${e.target.value}`)}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top-rated</option>
        <option value="upcoming">Upcoming</option>
      </select>

      <div className="movieList">
      {movie.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        <div className="movieCard">
        <img className="cardImage" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt=""/>
        <div textContainer>
            <h1>{movie.title}</h1>
            <p className="releaseDate">Released {movie.release_date}</p>
          </div> 
       </div>   
        </Link>
      ))}
      </div>  
    </section>
  )
}