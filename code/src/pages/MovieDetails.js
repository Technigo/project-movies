import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './moviedetails.css'

export const MovieDetails = () => {
  //Destructuring to get the movie id key from the url params, called id beacuse that is what we named it in the path in App.js path="/movies/:id"
  const { id } = useParams()

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Need a state to map the data about movie
  const [movie, setMovie] = useState([])

  //Putting id as second argument to load new movie when another movie is clicked on
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json()) //Get the json of movie
      .then((json) => {
        console.log(json)
        setMovie(json) //Set the state to movieDetails
      })
  }, [id])

  //Return a background backdrop, smaller poster, title, voting, overview
  return (
    <section className="movieWrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <Link to="/">
        <div className="backToList">Movies</div>
      </Link>
      <section className="movieSummary">
        <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movieInfo">
          <h1>{movie.title} <span className="voting">{movie.vote_average}/10</span></h1>
          <p>{movie.overview}</p>
        </div>
      </section>
    </section >
  )

}