import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu } from '../components/NavMenu'
import './movielist.css'

export const MovieList = () => {
  //Loading state to show loading mean while API is fetched
  const [loading, setLoading] = useState(true)
  //To store a list of movies
  const [movies, setMovies] = useState([])
  //To store a new list of movies based on the options in Nav.js
  //Popular is initial state to show as default
  const [chosenList, setChosenList] = useState("popular")

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Get movieList from the chosen option in Nav - passed in Nav component
  const chosenMovieList = movieList => {
    setChosenList(movieList)
  }

  //useEffect to fecth API data
  //Want to get the option chosen in Nav and put it in the url
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${chosenList}?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => res.json()) //Get the json of movie list
      .then(json => {
        setMovies(json.results) //Set the json.reslut to movies that vi are mapping further down
        setLoading(false)
      })
  }, [chosenList]) //Re fetches the API based on what list is chosen

  //Loading spinner mean while loading API
  if (loading) {
    return (
      <section className="loading">
        <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </section>
    )
  }

  //Returning the movies in the json by map() - id, poster, title, release date
  return (
    <section className="movieMain">
      <NavMenu chosenMovieList={chosenMovieList} chosenList={chosenList} />
      <section className="moviesWrapper">
        {movies.map((movie) => (
          <article className="movieList" key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img className="movieListPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className="movieListDetails">
                <h1>{movie.title}</h1>
                <h2>Release: {movie.release_date}</h2>
              </div>
            </Link>
          </article>
        ))}
        <footer>
          <p>Technigo Bootcamp 2019 © Sofie Nyblad</p>
        </footer>
      </section>
    </section >
  )

}