import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './details.css'



export const Details = () => {

  const [details, setDetails] = useState()
  const { id } = useParams()

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8fe2cb625158d587f8b0296620d5d249&language=en-US`)
        .then(res => res.json())
        .then(json => {
          setDetails(json)
        })          
    }, [id])

    return (
      <section className="detail-page">
            {console.log(details)}
              <Link to={`/`} className="go-back"> 👈Go back </Link> 
                {details && (
                  <div className="background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
                    <div className="summary">
                      <img className="summary-img" alt={details.title} src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
                      <div className="details">
                        <h1>{details.title} <span className="rating">{details.vote_average}/10</span></h1>
                        <p>{details.overview}</p>
                      </div>
                    </div>
                  </div>
                )}          
      </section>
    )
  }

  // linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%),