import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from 'components/LoadingSpinner'
import './moviedetails.css'

export const MovieDetails = () => {
  //Destructuring to get the movie id key from the url params, called id beacuse that is what we named it in the path in App.js path="/movies/:id"
  const { movieId } = useParams()

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Loading state to show loading mean while API is fetched
  const [loading, setLoading] = useState(true)
  //Need a state to map the data about movie
  const [movie, setMovie] = useState([])
  //To set error state if movie not found
  const [error, setError] = useState(false)

  //Fetching the API with useEffect
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json()) //Get the json of movie
      .then((json) => {
        if (json.status_code === 34) {
          setError(true)
        } else {
          setMovie(json) //Set the state to movieDetails
          console.log(json)
        }
        setLoading(false)
      })
  }, [movieId]) //Putting id as second argument to fetch new movie when id is changing

  //SAVING OLD CODE FOR REVIEW - WHICH APPROACH IS BEST?
  //Loading spinner mean while loading API
  // if (loading) {
  //   return (
  //     <section className="loading">
  //       <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  //     </section>
  //   )
  // }

  //If movie is not found show this "not found"-page
  // if (error) {
  //   return (
  //     <section className="notFound">
  //       <h1>Movie not found</h1>
  //       <Link to="/">
  //         <h2><i className="fas fa-chevron-circle-left" /> Back to list with movies</h2>
  //       </Link>
  //     </section >
  //   )
  // }

  return (
    <main>
      {loading && <LoadingSpinner />}

      {error &&
        <section className="notFound">
          <h1>Movie not found</h1>
          <Link to="/">
            <h2><i className="fas fa-chevron-circle-left" /> Back to list with movies</h2>
          </Link>
        </section >
      }

      {!loading && !error &&
        <section className="movieWrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <Link to="/">
            <div className="backToList"><i className="fas fa-chevron-circle-left" /> Movies</div>
          </Link>
          <section className="movieSummary">
            <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="movieInfo">
              <h1>{movie.title} <span className="voting">{movie.vote_average}/10</span></h1>
              <p>{movie.overview}</p>
              <h2>Release: {movie.release_date}</h2>
            </div>
          </section>
        </section>
      }
    </main>
  )

}