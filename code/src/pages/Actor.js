import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Actor = () => {

  const { movieId,actorID } = useParams();
  console.log(movieId, actorID);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US`)
   .then((res) => res.json())
   .then((json) => {
     console.log(json);
     //console.log(newArr);
     setActor(json);
     console.log(actor);
   })
  },[actorID])

return (
  <div className="actor-container">
      <Link className="link-back" to={`/movies/${movieId}`}><span role="img" aria-label="back-arrow">⬅️ </span>Back to movie</Link>
      <h1>{actor.name}</h1>
      <p>{actor.biography === "" ? "We don't have a lot of information on this actor yet.": actor.biography }</p>
      
      <a className="imdb-link" href={`https://www.imdb.com/name/${actor.imdb_id }/`} alt="imdb-link" target="_blank" rel="noopener noreferrer">IMDB <span role="img" aria-label="link-emoji">🔗</span> </a>
      <img className="actor-poster" src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt={actor.name} />
       
  </div>
)
}