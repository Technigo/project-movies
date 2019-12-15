import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "pages/castdetails.css"


export const CastDetails = () => {
  const { castId } = useParams()

  const [person, setPerson] = useState([])
  const [actorName, setActorName] = useState("")

  const api_key = "363444609247127238629594b245e069"

  //https://api.themoviedb.org/3/person/192/52fe4210c3a36847f800135f?api_key=363444609247127238629594b245e069&language=en-US
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.cast)
        console.log(json.cast)
      })
  }, [castId])


  //https://api.themoviedb.org/3/credit/52fe4210c3a36847f800135f?api_key=363444609247127238629594b245e069
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/credit/52fe4210c3a36847f800135f?api_key=${api_key}`)
      .then((res) => res.json())
      .then((json) => {
        setActorName(json.person)
        console.log(json.person)
      })
  }, [])

  return (
    <div className="cast-details-top">
      <h1>Movies with {actorName.name}</h1>
      <section className="cast-details">
        {person.map((persons) => (
          <Link key={persons.credit_id} to={`/movies/${persons.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.id} />
            <div className="cast-details-summary">
              <h2>{persons.title}</h2>
              <p>Character: {persons.character}</p>
              <p>Released {persons.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

// I managed to "loop" the pages so that when you click on a actor you see all the 
// movies she/he was in and then you can click to see that movie details but I'm not sure how I did that! 
//Can you please explain why it suddenly worked? 