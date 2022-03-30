import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { DETAIL_URL } from "utils/URLS"

const Details = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams()
  //  const navigate = useNavigate()

  useEffect(() => {
    fetch(DETAIL_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [movieId])
  console.log(details)

  return (
    <div>
      <Link to='/'>
      <button className="home">Home</button>
      </Link>

      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
            alt={details.title}
          />

          <h2>Release date: {details.release_date}</h2>
          <h2>Description: {details.overview}</h2>
          <h2>Rating: {details.vote_average}</h2>
          <p>{details.original_title}</p>
        </div>
      </div>
    </div>
  )
}

export default Details

/* <h1>{movies.original_title}</h1>
<h2>Release date: {movies.release_date}</h2>
<h2>Description: {movies.overview}</h2>
<h2>Rating: {movies.vote_average}</h2> 

<button onClick={NotFound}>Home</button>

 const [details, setDetails] = useState(null) //set default to null an empty array is not the best according to Maksy
  const {movieName} = useParams()
  
  if (details === null){
    return <p>hej</p>
  } 

*/
