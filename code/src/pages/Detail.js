import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  //Destructuring to get the movie id key from the url params, called id beacuse that is what we named it in the path in App.js path="/movies/:id"
  const { id } = useParams()

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Need a state to map the data about movie
  const [movieDetails, setMovieDetails] = useState()

  //Putting id as second argument to load new movie when another movie is clicked on
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json()) //Get the json of movie
      .then((json) => {
        // console.log(json)
        setMovieDetails(json) //Set the state to details
      })
  }, [id])

  //Return a background image, smaller image, title, voting, overview
  return (
    <section>
      Movie details
      {/* <img className="detailsPoster" src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} /> */}
      <h1>{movieDetails.title}</h1>
    </section>
  )

}