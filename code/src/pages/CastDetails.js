import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "pages/castdetails.css"


export const CastDetails = () => {
  const { castId } = useParams()
  const [person, setPerson] = useState([])

  const api_key = "363444609247127238629594b245e069"


  //https://api.themoviedb.org/3/person/192/movie_credits?api_key=363444609247127238629594b245e069&language=en-US
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setPerson(json.cast)
      })
  }, [castId])


  return (
    <div className="case-details-top">
      <h1>MOVIES WITH {}</h1>
      <section className="cast-details">
        {person.map((persons) => (
          <Link key={persons.credit_id}>
            <img src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.id} />
            <div className="cast-details-summary">
              <h1>{persons.title}</h1>
              <p>character: {persons.character}</p>
              <p>Released {persons.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
